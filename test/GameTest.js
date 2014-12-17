var expect = require("expect.js");
var Entity = require("../lib/stores/Entity");
var Game = require("../lib/stores/Game");

describe('Game', function(){
  describe('#getPlayerWithId()', function(){
    var game;

    before(function(){
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
        game = new Game(data);
    });

    it('should return player', function(){
        var player1 = game.getPlayerWithId(1);
        expect(player1.name).to.equal("siuying");
        expect(player1.heroClass()).to.equal("Hunter");

        var player2 = game.getPlayerWithId(2);
        expect(player2.name).to.equal("zardeine");
        expect(player2.heroClass()).to.equal("Hunter");
    })
  })
})