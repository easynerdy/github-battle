
var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  //console.log(this.props);
  render: function () {
    return (
      <div>Hello {this.props.name}</div>
    )
  }
});

ReactDOM.render(<Hello name="Mark"/>, document.getElementById('app'));