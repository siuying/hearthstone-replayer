var Entity = require('./Entity');
var Player = require('./Player');
var CardStore = require('./CardStore');

// Process game event and update Game model based on it
var GameEventProcessor = {
    next_turn(game, turn) {
        game.currentTurnIndex = turn.number;
        var player = game.getCurrentPlayer();

        // sometime, player name is missing
        // so we update the player name with given name
        if (turn.player) {
            player.name = turn.player;
            console.log(turn.player, "'s Turn")
        }
    },

    open_card(game, options) {
        var card = CardStore.getCardWithId(options.card_id);
        var entity = new Entity(options.id, card);
        return game.entities[options.id] = entity;
    },

    card_revealed(game, options) {
        var entity = game.getEntityWithId(options.id);
        var card = CardStore.getCardWithId(options.card_id);
        if (card) {
            entity.card = card;
        }
        return game.entities[options.id] = entity;
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
        return entity;
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
        return entity;
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
        entity.addToHand();
        return entity;
    },

    attached(game, options) {
        var attachment = game.getEntityWithId(options.id);
        var target = game.getEntityWithId(options.target);
        target.attach(attachment);
        return target;
    },

    damaged(game, options) {
        var target = game.getEntityWithId(options.id);
        var amount = options.amount;
        target.damaged = amount;
        return target;
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
        return entity;
    },

    card_reshuffled(game, options) {
        var entity = game.getEntityWithId(options.id);
        var player  = game.getPlayerWithId(options.player_id);
        var card    = CardStore.getCardWithId(options.card_id);
        if (player) {
            entity.player = player;
        }
        if (card) {
            entity.card = card;
        }
        entity.addToDeck();
        entity.reset();
        return entity;
    },

    card_returned(game, options) {
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
        entity.reset();
        return entity;
    },

    card_discarded(game, options) {
        var entity = game.getEntityWithId(options.id);
        entity.discard();
        return entity;
    },

    card_destroyed(game, options) {
        var entity = game.getEntityWithId(options.id);
        entity.discard();
        return entity;
    },

    card_setaside(game, options) {
        var entity  = game.getEntityWithId(options.id);
        var player  = game.getPlayerWithId(options.player_id);
        var card    = CardStore.getCardWithId(options.card_id);
        if (player) {
            entity.player = player;
        }
        if (card) {
            entity.card = card;
        }
        entity.setaside();
        return entity;
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
        return entity;
    }
};

module.exports = GameEventProcessor;