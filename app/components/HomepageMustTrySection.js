var React = require('react');

var HomepageMustTrySection = React.createClass({
  listMustTries: function(place){
    return (
      <div key={place.id} className="must-try__element">
        <p> {place.restName} </p>
        <p> {place.description} </p>
      </div>
    )
  },
  render: function(){
      return (
        <div className="must-try-container">
          <h3 className="must-try__header discover-heading"> San Diegos Must Try Foods </h3>
          {this.props.mustTry.map(this.listMustTries)}
        </div>
      )
  }
});

module.exports = HomepageMustTrySection;
