var React = require('react');
var TopNavbar = require('./TopNavbar');
var HomePageContainer = require('../containers/HomePageContainer');
var Home = React.createClass({
    render: function(){
      return(
        <div>
          <TopNavbar />
          <HomePageContainer />
        </div>
      )
    }
});

module.exports = Home;
