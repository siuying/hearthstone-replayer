var keyMirror = require('keymirror');

var ZONES = keyMirror({
    DECK: null,
    HAND: null,
    PLAY: null,
    GRAVEYARD: null,
    SETASIDE: null
});

class Entity {
    constructor(id, card) {
        this
        this.id = id;
        this.card = card;
        this.damaged = 0;
        this.attachments = [];
        this.zone = ZONES.SETASIDE;
    }

    name() {
        return this.card.name;
    }

    isHidden() {
        return this.card == null;
    }
}

module.exports = Entity;