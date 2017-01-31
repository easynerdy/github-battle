var React = require('React');

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <div>Loading...</div>
    : <div>Load up the battle!</div>
};

module.exports = ConfirmBattle;