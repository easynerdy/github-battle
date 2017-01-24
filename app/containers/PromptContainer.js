var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
  render: function() {
      return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
          <h1>{this.props.route.header}</h1>
          <div className="col-sm-12">
            <form onSubmit={PromptContainer}>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Github Username"
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