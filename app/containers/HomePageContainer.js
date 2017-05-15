var React = require('react');

var HomepageLocationHeader = require('../components/HomepageLocationHeader');
var HomepageLeftSidebarContainer = require('./HomepageLeftSidebarContainer');
var HomepageDiscoverContainer =  require('./HomepageDiscoverContainer');

var HomePageContainer = React.createClass({
  getInitialState: function(){
    return {}
  },
  render: function(){
      return (
        <div className="homepage-container">
          <HomepageLocationHeader />
          <section className="homepage-container__sections">
            <HomepageLeftSidebarContainer />
            <HomepageDiscoverContainer />
          </section>
        </div>
      )
  }
});

module.exports = HomePageContainer;
