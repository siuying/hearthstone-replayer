var expect = require("expect.js");
var Entity = require("../lib/stores/Entity");
var Game = require("../lib/stores/Game");

describe('Game', function(){
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

  describe('#getPlayerWithId()', function(){
    it('should return player', function(){
        var player1 = game.getPlayerWithId(1);
        expect(player1.name).to.equal("siuying");
        expect(player1.heroClass()).to.equal("Hunter");

        var player2 = game.getPlayerWithId(2);
        expect(player2.name).to.equal("zardeine");
        expect(player2.heroClass()).to.equal("Hunter");
    })
  })

  describe("#getCurrentPlayer()", function(){
    it("should return first player for odd number turn", function(){
      game.currentTurnIndex = 1;
      expect(game.getCurrentPlayer()).to.equal(game.getPlayerWithId(1));
      
      game.currentTurnIndex = 3;
      expect(game.getCurrentPlayer()).to.equal(game.getPlayerWithId(1));
      
      game.currentTurnIndex = 5;
      expect(game.getCurrentPlayer()).to.equal(game.getPlayerWithId(1));
    });

    it("should return second player for even number turn", function(){
      game.currentTurnIndex = 2;
      expect(game.getCurrentPlayer()).to.equal(game.getPlayerWithId(2));
      
      game.currentTurnIndex = 4;
      expect(game.getCurrentPlayer()).to.equal(game.getPlayerWithId(2));
      
      game.currentTurnIndex = 6;
      expect(game.getCurrentPlayer()).to.equal(game.getPlayerWithId(2));
    });

    it("should return nil for turn 0", function(){
      game.currentTurnIndex = 0;
      expect(game.getCurrentPlayer()).to.not.be.ok();
    })
  })
})