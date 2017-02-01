let React = require('react');
let Prompt = require('../components/Prompt');

let PromptContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
    username: ''
    }
  },

  handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    })
  },

  handleSubmitUser: function(e) {
    e.preventDefault();
    let username = this.state.username;
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
        <Prompt
          username={this.state.username}
          header={this.props.route.header}
          onSubmitUser={this.handleSubmitUser}
          onUpdateUser={this.handleUpdateUser} />
      )
  }
});

module.exports = PromptContainer;