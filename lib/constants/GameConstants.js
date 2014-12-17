var keyMirror = require('keymirror');

module.exports = {
    ActionTypes: keyMirror({
        NEXT_TURN_ACTION: null
    }),

    ZONES: keyMirror({
        DECK: null,
        HAND: null,
        PLAY: null,
        GRAVEYARD: null,
        SETASIDE: null
    }),

    CARD_TYPES: {
        ENCHANTMENT: "Enchantment",
        SPELL: "Spell",
        MINION: "Minion",
        HERO: "Hero",
        HERO_POWER: "Hero Power",
    }
};