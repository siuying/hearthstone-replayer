var Entity = require('./Entity');
var Player = require('./Player');
var CardStore = require('./CardStore');

var GameEventHandlers = {
    open_card(game, options) {
        var id = options.id;
        var cardId = options.card_id;
        var entity = new Entity(id, CardStore.getCardWithId(cardId));
        game.entities[id] = entity;
    },

    card_revealed(game, options) {
        var id = options.id;
        var cardId = options.card_id;
        var entity = game.getEntityWithId(id);
        if (entity) {
            entity.card = CardStore.getCardWithId(cardId);
        } else {
            entity = new Entity(id, CardStore.getCardWithId(cardId));
        }
        game.entities[id] = entity;
    },

    card_added_to_deck(game, options) {
        var id = options.id;
        var cardId = options.card_id;
        var playerId = options.player_id;
        var entity = game.getEntityWithId(id);
    }
};

module.exports = GameEventHandlers;