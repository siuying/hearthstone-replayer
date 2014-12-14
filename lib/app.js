var React = require('react');

var HelloWorld = React.createClass({
    render: function() {
        return (
            <div className="hello">
                <h1>Hello, world!</h1>
            </div>
        )
    }
});

React.render(HelloWorld(), document.getElementById('content'));
