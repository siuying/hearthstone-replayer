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
        this.eventListeners = [GameEventHandlers]

        // load players
        if (replay.players) {
            this._loadPlayers(replay.players);
        }

        // load turns
        if (this.replay.turns) {
            var game = this;
            game.eventListeners.forEach(function(listener){
                game.replay.turns.forEach(function(turn){
                    console.log("process turn #", turn.number)
                    game.currentTurnIndex = turn.number;

                    turn.events.map(function(event){
                        var name = event[0];
                        var data = event[1];
                        var handler = listener[name];
                        console.log(name, data)
                        if (handler) {
                            handler(game, data);
                        } else {
                            console.log("UNSUPPORTED: ", name)
                        }
                    });
                });
            });
        }

    }

    getEntityWithId(id) {
        var entity = this.entities[id];
        if (!entity) {
            entity = new Entity(id, null);
            this.entities[id] = entity;
        }
        return entity;
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