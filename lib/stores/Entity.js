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

    addToDeck() {
        this.zone = ZONES.DECK;
    }

    addToHand() {
        this.zone = ZONES.HAND;
    }

    play() {
        this.zone = ZONES.PLAY;
    }

    discard() {
        this.zone = ZONES.GRAVEYARD;
    }

    setaside() {
        this.zone = ZONES.SETASIDE;
    }

    reset() {
        this.damaged = 0;
        this.attachments = [];
    }
}

module.exports = Entity;