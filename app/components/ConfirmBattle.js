const React = require('React');

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <div>Loading...</div>
    : <div>Battle Page!</div>
};

module.exports = ConfirmBattle;