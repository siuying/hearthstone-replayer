var Entity = require('./Entity');
var Player = require('./Player');
var CardStore = require('./CardStore');

class Game {
    constructor(replay) {
        this.currentTurnIndex = 0;
        this.replay = replay;
        this.players = replay.players.map(function(player){
            var hero = new Entity(player.hero.id, CardStore.getCardWithId(player.hero.card_id));
            var power = new Entity(player.hero_power.id, CardStore.getCardWithId(player.hero_power.card_id));
            return new Player(player.id, player.name, player.first_player, hero, power);
        });
        this.nextTurn();
    }

    nextTurn() {
        var turn = this.replay.turns[this.currentTurnIndex];
        turn.events.forEach(function(event){
            console.log(event);
        });
        this.currentTurnIndex = this.currentTurnIndex + 1;
    }
};

module.exports = Game;