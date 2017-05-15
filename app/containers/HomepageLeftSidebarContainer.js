var React = require('react');
const uuidV4 = require('uuid'); //TODO: UUID will be from Axios call, not here

var LeftSidebarFoods = require('../components/LeftSidebarFoods');
var LeftSidebarLocations =  require('../components/LeftSidebarLocations');
var HomepageLeftSidebarContainer= React.createClass({
  getInitialState: function(){
    return {
      sidebarFoods: [],
      sidebarLocations: []
    }
  },
  componentDidMount: function(){
    //TODO: Data set here will be called from Axios ajax not hard coded
    this.setState({
      sidebarFoods: [
        {
          id: uuidV4.v4(),
          foodType: 'Bakery',
          foodCount: 10
        },
        {
          id: uuidV4.v4(),
          foodType: 'Alcohol & Bars',
          foodCount: 24
        },
        {
          id: uuidV4.v4(),
          foodType: 'Coffee Shop',
          foodCount: 16
        },
        {
          id: uuidV4.v4(),
          foodType: 'Deli',
          foodCount: 5
        },
        {
          id: uuidV4.v4(),
          foodType: 'Chinese',
          foodCount: 10
        }

      ],
      sidebarLocations: [
        {
          id: uuidV4.v4(),
          locName: 'Mira Mesa',
          locCount: 123
        },
        {
          id: uuidV4.v4(),
          locName: 'University City',
          locCount: 78
        },
        {
          id: uuidV4.v4(),
          locName: 'Poway',
          locCount: 106
        },
        {
          id: uuidV4.v4(),
          locName: 'Old Town',
          locCount: 230
        },
        {
          id: uuidV4.v4(),
          locName: 'Balboa',
          locCount: 67
        }
      ]
    });
  },
  render: function(){
      return (
        <div className="homepage-left-sidebar">
          <LeftSidebarFoods sidebarFoods={this.state.sidebarFoods} />
          <LeftSidebarLocations sidebarLocations={this.state.sidebarLocations} />
        </div>
      )
  }
});

module.exports = HomepageLeftSidebarContainer;
