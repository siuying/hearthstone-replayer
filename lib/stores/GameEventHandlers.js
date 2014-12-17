var Entity = require('./Entity');
var Player = require('./Player');
var CardStore = require('./CardStore');

var GameEventHandlers = {
    open_card(game, options) {
        var card = CardStore.getCardWithId(options.card_id);
        var entity = new Entity(options.id, card);
        game.entities[options.id] = entity;
    },

    card_revealed(game, options) {
        var entity = game.getEntityWithId(options.id);
        var card = CardStore.getCardWithId(options.card_id);
        if (entity) {
            entity.card = card;
        } else {
            entity = new Entity(options.id, card);
        }
        game.entities[options.id] = entity;
    },

    card_added_to_deck(game, options) {
        var entity = game.getEntityWithId(options.id);
        var player = game.getPlayerWithId(options.player_id);
        var card    = CardStore.getCardWithId(options.card_id);
        if (player) {
            entity.player = player;
        }
        if (card) {
            entity.card = card;
        }
        entity.addToDeck();
    },

    card_received(game, options) {
        var entity = game.getEntityWithId(options.id);
        var player  = game.getPlayerWithId(options.player_id);
        var card    = CardStore.getCardWithId(options.card_id);
        if (player) {
            entity.player = player;
        }
        if (card) {
            entity.card = card;
        }
        entity.addToHand();
    },

    card_drawn(game, options) {
        var entity = game.getEntityWithId(options.id);
        var player  = game.getPlayerWithId(options.player_id);
        var card    = CardStore.getCardWithId(options.card_id);
        if (player) {
            entity.player = player;
        }
        if (card) {
            entity.card = card;
        }
        entity.addToHand(game.getPlayerWithId(options.player_id));
    },

    attached(game, options) {
        var attachment = game.getEntityWithId(options.id);
        var target = game.getEntityWithId(options.target);
        target.attach(attachment)
    },

    damage(game, options) {
        var target = game.getEntityWithId(options.id);
        var amount = options.amount;
        target.damaged = amount;
    },

    card_played(game, options) {
        var entity = game.getEntityWithId(options.id);
        var player  = game.getPlayerWithId(options.player_id);
        var card    = CardStore.getCardWithId(options.card_id);
        if (player) {
            entity.player = player;
        }
        if (card) {
            entity.card = card;
        }
        entity.play();
    },

    card_discarded(game, options) {
        var entity = game.getEntityWithId(options.id);
        entity.discard();
    },

    card_destroyed(game, options) {
        var entity = game.getEntityWithId(options.id);
        entity.discard();
    },

    card_put_in_play(game, options) {
        var entity  = game.getEntityWithId(options.id);
        var player  = game.getPlayerWithId(options.player_id);
        var card    = CardStore.getCardWithId(options.card_id);
        if (player) {
            entity.player = player;
        }
        if (card) {
            entity.card = card;
        }
        entity.play();
    }
};

module.exports = GameEventHandlers;