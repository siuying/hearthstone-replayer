class Entity {
    constructor(id, card) {
        this.id = id;
        this.card = card;
        this.damaged = 0;
        this.attachments = [];
    }

    name() {
        return this.card.name;
    }
}

module.exports = Entity;