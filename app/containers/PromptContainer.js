var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
    username: ''
    }
  },

  onUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    })
  },

  onSubmitUser: function(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username : ''
    });

    if (this.props.routeParams.playerOne) {
      // go to battle if there is a route param added called playerOne
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // go to player two
      this.context.router.push('/playerTwo/' + this.state.username);
    };
  },

  render: function() {
      return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
          <h1>{this.props.route.header}</h1>
          <div className="col-sm-12">
            <form onSubmit={this.onSubmitUser}>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Github Username"
                    value={this.state.username}
                    onChange={this.onUpdateUser}
                    type="text" />
                </div>
                <div className="col-sm-4 col-sm-offset-4 text-center">
                  <button
                    className="btn btn-block btn-success"
                    type="submit">
                    Continue
                  </button>
                </div>
            </form>
          </div>
        </div>
      )
  }
});

module.exports = PromptContainer;