var assert = require("assert")
var Game = require("../lib/stores/Game");
var GameEventHandlers = require("../lib/stores/GameEventHandlers");

describe('GameEventHandlers', function(){
  describe('#open_card()', function(){
    it('should add a card to game', function(){
        var game = new Game({players: [], turns: []});
        GameEventHandlers.open_card(game, {id: 1, card_id: "EX1_536"});

        var entity = game.getEntityWithId(1);
        assert.equal(entity.name(), 'Eaglehorn Bow');
    })
  })

  describe("#card_revealed()", function(){
    it('should reveal a hidden card', function(){
        var game = new Game({players: [], turns: []});
        GameEventHandlers.open_card(game, {id: 1, card_id: null});
        GameEventHandlers.card_revealed(game, {id: 1, card_id: "EX1_536"});

        var entity = game.getEntityWithId(1);
        assert.equal(entity.name(), 'Eaglehorn Bow');
    })
  })
})