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
    })
};