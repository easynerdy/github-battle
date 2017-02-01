let React = require('react');
let ConfirmBattle = require('../components/ConfirmBattle');
let githubHelpers = require('../utils/githubHelpers');

let ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isLoading: false,
      playerInfo: []
    }
  },

  componentDidMount : function() {
    var query = this.props.location.query;
    //console.log('we made it to componentDidMount');
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]);
    //returns an array of github data
  },

  render: function() {
    return <ConfirmBattle
      isLoading={this.state.isLoading}
      playersInfo={this.state.playersInfo} />
  }
});

module.exports = ConfirmBattleContainer;