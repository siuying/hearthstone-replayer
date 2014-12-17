var keyMirror = require('keymirror');
var ZONES = require('../constants/GameConstants').ZONES;

class Entity {
    constructor(id, card) {
        this
        this.id = id;
        this.card = card;
        this.damaged = 0;
        this.attachments = [];
        this.player = null;
        this.zone = ZONES.SETASIDE;
    }

    name() {
        return this.card.name;
    }

    isHidden() {
        return this.card == null;
    }

    attach(entity) {
        this.attachments.push(entity);
    }

    detach(entity) {
        this.attachments.delete(entity);
    }

    addToDeck(player) {
        this.zone = ZONES.DECK;
        this.player = player;
    }

    addToHand(player) {
        this.zone = ZONES.HAND;
        this.player = player;
    }
}

module.exports = Entity;