var React = require('react');
var NavbarSearch = require('../components/NavbarSearch');
var NavbarSearchContainer = React.createClass({
    getInitialState: function(){
      return {}
    },
    render: function(){
      return <div className="top-navbar__search-container"><NavbarSearch/></div>
    }
});

module.exports = NavbarSearchContainer;
