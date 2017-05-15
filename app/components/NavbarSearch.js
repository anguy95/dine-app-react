var React = require('react');
var NavbarSearch = React.createClass({
  render: function(){
    return (
      <div className="top-navbar__search_input">
        <input className="search" type="text" placeholder="Search for Food, Burgers, etc."/>
        <button type="submit" onClick={this.handleUserSearch}><i className="fa fa-search fa-lg"/></button>
      </div>
    )
  }
});

module.exports = NavbarSearch;
