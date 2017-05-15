var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var NavbarSearchContainer = require('../containers/NavbarSearchContainer');
var NavbarProfileContainer = require('../containers/NavbarProfileContainer');

var TopNavbar = React.createClass({
  handleUserSearch: function(e){
    e.preventDefault();
  },
  render: function(){
    return (
      <nav className="top-navbar">
        <div className="top-navbar__container">
            <Link to="/">
              <img className="top-navbar__logo" src={require("../images/dineLogo.png")}/>
            </Link>
            <NavbarSearchContainer />
            <NavbarProfileContainer />
        </div>
      </nav>
    )
  }
});

module.exports = TopNavbar;
