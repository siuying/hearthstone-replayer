var fs = require('fs');
var path = require('path');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Game = require('./Game');
var CHANGE_EVENT = 'change'; 

// todo: load game dynamically
var _data = JSON.parse(fs.readFileSync('/Users/siuying/workspace/tool/hearthstone-replayer/gamelog1.json', 'utf8'));
var _game = new Game(_data);
var _currentTurn = 0;

function _configureGame() {
};

_configureGame();

// Game Store
var GameStore = assign({}, EventEmitter.prototype, {
    getPlayers() {
        return _game.players;
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.type) {
        case ActionTypes.NEXT_TURN_ACTION:
            _nextTurn();
            GameStore.emitChange();
            break;
        default:
            // do nothing
    }

    // No errors. Needed by promise in Dispatcher.
    return true;
});

module.exports = GameStore;