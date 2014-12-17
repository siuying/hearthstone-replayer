var assert = require("assert")
var Entity = require("../lib/stores/Entity");
var Game = require("../lib/stores/Game");

describe('Game', function(){
  describe('#getPlayerWithId()', function(){
    it('should return player', function(){
        var data = {players: [{
          "id": 2,
          "name": "zardeine",
          "first_player": false,
          "hero": {
            "id": 36,
            "card_id": "HERO_05"
          },
          "hero_power": {
            "id": 37,
            "card_id": "DS1h_292"
          }
        },
        {
          "id": 1,
          "name": "siuying",
          "first_player": true,
          "hero": {
            "id": 4,
            "card_id": "HERO_05"
          },
          "hero_power": {
            "id": 5,
            "card_id": "DS1h_292"
          }
        }]};
        var game = new Game(data);
        var player1 = game.getPlayerWithId(1);
        assert.equal(player1.name, "siuying");
        assert.equal(player1.heroClass(), "Hunter");

        var player2 = game.getPlayerWithId(2);
        assert.equal(player2.name, "zardeine");
        assert.equal(player2.heroClass(), "Hunter");
    })
  })
})