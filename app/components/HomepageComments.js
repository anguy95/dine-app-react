var React = require('react');
var HomepageUserComment = require('./HomepageUserComment');
const uuidV4 = require('uuid');

var HomepageComments = React.createClass({
  listComments: function(comment){
    return <HomepageUserComment key={comment.id} comment={comment}/>
  },
  render: function(){
      return (
        <section className="homepage-comments-container">
          <h3 className="homepage-comments__header discover-heading"> What Others Are Saying </h3>
          <div className="homepage-user-comments-container">
            {this.props.homepageComments.map(this.listComments)}
          </div>
        </section>
      )
  }
});

module.exports = HomepageComments;
