const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const transparentBg = require('../styles').transparentBg;

function Home (props) {
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

module.exports = Home;