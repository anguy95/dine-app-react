var React = require('react');
const uuidV4 = require('uuid');

var HompageTopTen = React.createClass({
  createList: function(place){
    return (
      <li key={uuidV4.v4()} ><span>{place}</span></li>
    )
  },
  render: function(){
      var topTenList = this.props.popularAround;
      var listLeft = topTenList.slice(0,topTenList.length / 2);
      var listRight = topTenList.slice(listLeft.length);
      return (
        <section className="top-ten-container">
          <h3 className="top-ten__header discover-heading"> Popular Foods Around You </h3>
          <div className="top-ten-list-container">
            <ol className="list-left">
              {listLeft.map(this.createList)}
            </ol>
            <ol start={listLeft.length + 1} className="list-right">
              {listRight.map(this.createList)}
            </ol>
          </div>
        </section>
      )
  }
});

module.exports = HompageTopTen;
