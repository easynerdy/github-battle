let React = require('react');
let ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

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
    //takes an array and returns a promise for an array of data
    console.log('COMPONENTDIDMOUNT', this.props.location.query);
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        console.log('PLAYERS: ', players);
        //this.setState({
          //isLoading: false,
          //playersInfo: [players[0], players[1]]
        //})

      }) //end then
      .catch(function(err) {
        console.warn('Error in componentDidMount', err);
      }) //end catch
  },

  render: function() {
    return <ConfirmBattle
      isLoading={this.state.isLoading}
      playersInfo={this.state.playersInfo} />
  }
});

module.exports = ConfirmBattleContainer;