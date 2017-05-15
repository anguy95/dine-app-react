var React = require('react');

var NavbarProfile = React.createClass({
  render: function(){
    return (
      <div className="navbar-profile">
        <p className="navbar-profile__userPoints">{this.props.userPoints}</p>
        <img className="navbar-profile__userPic" src={this.props.userPic}/>
        <p><i className="fa fa-chevron-down"/></p>
      </div>
    )
  }
});

module.exports = NavbarProfile;
