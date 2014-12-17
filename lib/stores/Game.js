var Entity = require('./Entity');
var Player = require('./Player');
var CardStore = require('./CardStore');
var GameEventHandlers = require("./GameEventHandlers");
var CARD_TYPES = require('../constants/GameConstants').CARD_TYPES;
var ZONES = require('../constants/GameConstants').ZONES;

var _ = require('lodash');

class Game {
    constructor(replay) {
        this.currentTurnIndex = 0;
        this.replay = replay;
        this.entities = {};

        // load players
        if (replay.players) {
            this._loadPlayers(replay.players);
        }

        this.nextTurn();
    }

    nextTurn() {
        var turns = this.replay.turns;
        if (!turns) {
            return false;
        }

        var turn = turns[this.currentTurnIndex];
        var game = this;
        if (!turn) {
            console.warn("turn ${this.currentTurnIndex} not found");
            return false;
        }

        var result = turn.events.map(function(event){
            var name = event[0];
            var data = event[1];
            var handler = GameEventHandlers[name];
            if (handler) {
                return [name, handler(game, data)];
            } else {
                console.warn("unhandled event: ", name);
                return [name, null];
            }
        });

        this.currentTurnIndex = this.currentTurnIndex + 1;
        return result;
    }

    getEntityWithId(id) {
        return this.entities[id];
    }

    getPlayerWithId(id) {
        return this.playersMap[id];
    }

    getHandWithPlayerId(playerId) {
        return this.entities.map(function(entity){
            return entity.player.id == playerId && entity.zone == ZONES.HAND;
        });
    }

    getPlayWithPlayerId(playerId) {
        return this.entities.map(function(entity){
            return entity.player.id == playerId && entity.zone == ZONES.PLAY;
        });
    }

    getDeckWithPlayerId(playerId) {
        return this.entities.map(function(entity){
            return entity.player.id == playerId && entity.zone == ZONES.DECK;
        });
    }

    _loadPlayers(playersData) {
        var game = this;
        this.playersMap = {}
        this.players = playersData.map(function(player){
            var hero = new Entity(player.hero.id, CardStore.getCardWithId(player.hero.card_id));
            var power = new Entity(player.hero_power.id, CardStore.getCardWithId(player.hero_power.card_id));
            game.entities[hero.id] = hero;
            game.entities[power.id] = power;
            var player = new Player(player.id, player.name, player.first_player, hero, power);
            game.playersMap[player.id] = player;
            return player;
        });
    }
};

module.exports = Game;