var React = require('react');

var Player = React.createClass({
    render() {
        return (
            <section class="player">
                <p>{this.props.player.name}</p>
            </section>
        )
    }
});

module.exports = Player;