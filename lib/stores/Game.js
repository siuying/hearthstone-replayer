var Entity = require('./Entity');
var Player = require('./Player');
var CardStore = require('./CardStore');
var GameEventHandlers = require("./GameEventHandlers");
var _ = require('lodash');

class Game {
    constructor(replay) {
        var game = this;
        this.currentTurnIndex = 0;
        this.replay = replay;
        this.entities = {};

        // load players
        this.players = {}
        replay.players.map(function(player){
            var hero = new Entity(player.hero.id, CardStore.getCardWithId(player.hero.card_id));
            var power = new Entity(player.hero_power.id, CardStore.getCardWithId(player.hero_power.card_id));
            game.entities[hero.id] = hero;
            game.entities[power.id] = power;
            game.players[player.id] = new Player(player.id, player.name, player.first_player, hero, power);
        });
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
            return false;
        }

        turn.events.forEach(function(event){
            var name = event[0];
            var data = event[1];
            var handler = GameEventHandlers[name];
            if (handler) {
                handler(game, data);
            } else {
                console.warn("unhandled event: ", name);
            }
        });
        this.currentTurnIndex = this.currentTurnIndex + 1;
        return turn;
    }

    getEntityWithId(id) {
        return this.entities[id];
    }

    getPlayerWithId(id) {
        return this.players[id];
    }
};

module.exports = Game;