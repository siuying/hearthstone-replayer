var fs = require('fs');
var path = require('path');
var merge = require('react/lib/merge'); 
var EventEmitter = require('events').EventEmitter;

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Player = require('./Player');
var CHANGE_EVENT = 'change'; 

// todo: load game dynamically

var _game = JSON.parse(fs.readFileSync('/Users/siuying/workspace/tool/hearthstone-replayer/gamelog1.json', 'utf8'));

var GameStore = merge(EventEmitter.prototype, {
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

    // No errors. Needed by promise in Dispatcher.
    return true;
});

module.exports = GameStore;