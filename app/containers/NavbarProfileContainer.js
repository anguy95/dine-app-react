var React = require('react');
var NavbarProfile = require('../components/NavbarProfile');

var NavbarProfileContainer = React.createClass({
  getInitialState: function(){
    return {
      userName: '',
      userFname: '',
      userLname: '',
      userPoints: ''
    }
  },
  componentWillMount: function(){
    this.setState({
      userName: 'anguy95',
      userFname: 'Andrew',
      userLname: 'Nguyen',
      userPoints: '190',
      userPic: 'http://www.thewrap.com/wp-content/uploads/2016/09/1200.jpg'
    })
  },
  render: function(){
    return (
      <div className="navbar-profile-container">
        <NavbarProfile userPoints={this.state.userPoints} userPic={this.state.userPic}/>
      </div>
    )
  }
});

module.exports = NavbarProfileContainer;
