var fs = require('fs');
var Player = require('./Player');
var CHANGE_EVENT = 'change'; 

// todo: load game dynamically
var _game = JSON.parse(fs.readFileSync(__dirname + '/gamelog1.json', 'utf8'));

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
    },

    dispatcherIndex: AppDispatcher.register(function(payload) {
        var action = payload.action; 
        var text;

        switch(action.actionType) {

        }

        // No errors. Needed by promise in Dispatcher.
        return true;
    }
};

module.exports = GameStore;