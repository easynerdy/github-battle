let React = require('react');
let ConfirmBattle = require('../components/ConfirmBattle');

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
    // TODO: Fetch info from github and update state
  },

  render: function() {
    return <ConfirmBattle
      isLoading={this.state.isLoading}
      playersInfo={this.state.playersInfo} />
  }
});

module.exports = ConfirmBattleContainer;