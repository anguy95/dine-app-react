var React = require('react');

var HomepageLocationHeader = React.createClass({
  render: function(){
      return (
        <div className="homepage-location-header">
          {/*TODO: Replace Location header with location data from home container*/}
          <h2> San Diego </h2>
          <p> Find the best food around you. </p>
        </div>
      )
  }
});

module.exports = HomepageLocationHeader;
