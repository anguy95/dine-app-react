var React = require('react');

var LeftSidebarFoods = React.createClass({
  listFoodTypes:function(food){
    return (
      <a href="#" className="sidebar-children" key={food.id}><p>{food.foodType} ({food.foodCount})</p></a>
    )
  },
  render: function(){
      return (
        <div className="left-sidebar__foods">
          <h3 className="left-sidebar__title"> Types of Foods </h3>
          {this.props.sidebarFoods.map(this.listFoodTypes)}
        </div>
      )
  }
});

module.exports = LeftSidebarFoods;
