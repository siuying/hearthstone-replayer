var expect = require("expect.js");
var Game = require("../lib/stores/Game");
var GameEventHandlers = require("../lib/stores/GameEventHandlers");
var ZONES = require('../lib/constants/GameConstants').ZONES;

describe('GameEventHandlers', function(){
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

  describe('#open_card()', function(){
    it('should add a card to game', function(){
        GameEventHandlers.open_card(game, {id: 1, card_id: "EX1_536"});

        var entity = game.getEntityWithId(1);
        expect(entity.name()).to.equal('Eaglehorn Bow');
    })
  })

  describe("#card_revealed()", function(){
    it('should reveal a hidden card', function(){
        GameEventHandlers.open_card(game, {id: 1, card_id: null});
        GameEventHandlers.card_revealed(game, {id: 1, card_id: "EX1_536"});

        var entity = game.getEntityWithId(1);
        expect(entity.name()).to.equal('Eaglehorn Bow');
    })
  })

  describe("#card_added_to_deck()", function(){
    it('should add card to user deck', function(){
        GameEventHandlers.open_card(game, {id: 6, card_id: null});
        GameEventHandlers.card_added_to_deck(game, {id: 6, player_id: 1});

        var entity = game.getEntityWithId(6);
        expect(entity.player).to.equal(game.getPlayerWithId(1));
        expect(entity.zone).to.equal(ZONES.DECK);
    })
  })

  describe("#card_received()", function(){
    it('should add card to user hand', function(){
        GameEventHandlers.open_card(game, {id: 6, card_id: null});
        GameEventHandlers.card_received(game, {id: 6, player_id: 1, card_id: null});

        var entity = game.getEntityWithId(6);
        expect(entity.player).equal(game.getPlayerWithId(1));
        expect(entity.zone).equal(ZONES.HAND);
    })
  })

  describe("#card_drawn()", function(){
    it('should add card to user hand', function(){
        GameEventHandlers.open_card(game, {id: 69, card_id: null});
        GameEventHandlers.card_drawn(game, {id: 6, player_id: 1, card_id: null});

        var entity = game.getEntityWithId(6);
        expect(entity.player).equal(game.getPlayerWithId(1));
        expect(entity.zone).equal(ZONES.HAND);
    })
  })

  describe("#card_attached()", function(){
    it('should add card to user deck', function(){
        GameEventHandlers.open_card(game, {id: 69, card_id: "FP1_028e"});
        GameEventHandlers.open_card(game, {id: 57, card_id: "FP1_028e"});
        GameEventHandlers.card_attached(game, {id: 69, target: 57});

        var entity = game.getEntityWithId(69);
        var target = game.getEntityWithId(57);
        expect(target.attachments).to.contain(entity)
    })
  })
})