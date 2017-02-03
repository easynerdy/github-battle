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
    //getPlayersInfo takes an array and returns a promise for an array of data
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        console.log('PLAYERS: ', players);
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        }) //end setState
      }.bind(this)) //end then
      .catch(function(err) {
        console.warn('Error in componentDidMount', err);
      }); //end catch
  },

  render: function() {
    return <ConfirmBattle
      isLoading={this.state.isLoading}
      playersInfo={this.state.playersInfo} />
  }
});

module.exports = ConfirmBattleContainer;