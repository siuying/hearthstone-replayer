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

  describe("#attached()", function(){
    it('should add card to user deck', function(){
        GameEventHandlers.open_card(game, {id: 69, card_id: "FP1_028e"});
        GameEventHandlers.open_card(game, {id: 57, card_id: "FP1_028"});
        GameEventHandlers.attached(game, {id: 69, target: 57});

        var entity = game.getEntityWithId(69);
        var target = game.getEntityWithId(57);
        expect(target.attachments).to.contain(entity)
    })
  })

  describe("#damage()", function(){
    it('should set damage on target', function(){
        GameEventHandlers.open_card(game, {id: 57, card_id: "FP1_028"});
        GameEventHandlers.damage(game, {id: 57, amount: 2});

        var target = game.getEntityWithId(57);
        expect(target.damaged).to.equal(2);
    });
  })

  describe("#card_played()", function(){
    it('should moved to play', function(){
        GameEventHandlers.open_card(game, {id: 57, card_id: "CS2_101"});
        GameEventHandlers.card_played(game, {id: 57, player_id: 2, card_id: "CS2_101"});

        var entity = game.getEntityWithId(57);
        expect(entity.player).equal(game.getPlayerWithId(2));
        expect(entity.zone).equal(ZONES.PLAY);
    })
  })

  describe("#card_discarded()", function(){
    it('should moved to graveyard', function(){
        GameEventHandlers.open_card(game, {id: 57, card_id: "CS2_101"});
        GameEventHandlers.card_played(game, {id: 57, player_id: 2, card_id: "CS2_101"});
        GameEventHandlers.card_discarded(game, {id: 57, player_id: 2, card_id: "CS2_101"});
        var entity = game.getEntityWithId(57);
        expect(entity.zone).equal(ZONES.GRAVEYARD);
    })
  })

  describe("#card_destroyed()", function(){
    it('should moved to graveyard', function(){
        GameEventHandlers.open_card(game, {id: 57, card_id: "CS2_101"});
        GameEventHandlers.card_played(game, {id: 57, player_id: 2, card_id: "CS2_101"});
        GameEventHandlers.card_destroyed(game, {id: 57, player_id: 2, card_id: "CS2_101"});
        var entity = game.getEntityWithId(57);
        expect(entity.zone).equal(ZONES.GRAVEYARD);
    })
  })

  describe("#card_put_in_play()", function(){
    it('should added to play', function(){
        GameEventHandlers.card_put_in_play(game, {id: 57, player_id: 2, card_id: "CS2_101"});
        var entity = game.getEntityWithId(57);
        expect(entity.card.id).equal("CS2_101");
        expect(entity.zone).equal(ZONES.PLAY);
    })
  })
  
})