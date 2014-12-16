var React = require('react');

var Player = React.createClass({
    render() {
        return (
            <section className="player">
                <p>{this.props.player.name}</p>
            </section>
        )
    }
});

module.exports = Player;