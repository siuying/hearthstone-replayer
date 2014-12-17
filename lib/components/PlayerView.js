var React = require('react');

var Player = React.createClass({
    render() {
        return (
            <section className="player">
                <p className="name">{this.props.player.name}</p>
                <p className="class">{this.props.player.heroClass()}</p>
            </section>
        )
    }
});

module.exports = Player;