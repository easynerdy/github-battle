var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

var Prompt = function(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser} >
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Github Username"
                value={props.username}
                onChange={props.onUpdateUser}
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
};

Prompt.propTypes = {
    username : PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.func.isRequired
  },

module.exports = Prompt;