var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var transparentBg = require('../styles').transparentBg;

var Home = React.createClass({
  render: function() {
    return (
        <div className='jumbotron col-sm-12 text-center' style={transparentBg} >
          <h1>Github Battle</h1>
          <p className='lead'>Enter slogan here</p>
            <Link to='/playerOne'>
              <button className='btn btn-success btn-lg'>
                Get Started
              </button>
            </Link>
        </div>
      )
  }
});

module.exports = Home;