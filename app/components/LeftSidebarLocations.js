var React = require('react');

var LeftSidebarLocations = React.createClass({
  listLocations:function(location){
    return (
      <a href="#" className="sidebar-children" key={location.id}><p>{location.locName} ({location.locCount})</p></a>
    )
  },
  render: function(){
      return (
        <div className="left-sidebar__locations">
          <h3 className="left-sidebar__title"> Food by Location </h3>
          {this.props.sidebarLocations.map(this.listLocations)}
        </div>
      )
  }
});

module.exports = LeftSidebarLocations;
