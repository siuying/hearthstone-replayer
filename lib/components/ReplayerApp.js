var React = require('react');
var PlayerView = require('./PlayerView');
var GameStore = require('../stores/GameStore');

var ReplayerApp = React.createClass({
    render() {
        var player1 = GameStore.getPlayers()[0];
        var player2 = GameStore.getPlayers()[1];

        return (
            <div>
                <PlayerView player={player1} />
                <PlayerView player={player2} />
            </div>
        )
    }
});

module.exports = ReplayerApp;