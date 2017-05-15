var React = require('react');

var HomepageUserComment = React.createClass({
  render: function(){
    return (
      <article className="homepage-user-comment">
        <section className="user-comment">
          <div>
            <img src="#" alt="User's profile picture for what people are saying around you"/>
            <p>{this.props.comment.userName}</p>
          </div>
        </section>
        <section className="review-container">
          <p><span><a href="#" id="review-item-link">{this.props.comment.dish}</a></span> &nbsp;at&nbsp; <span><a href="#" id="review-restaurant-link">{this.props.comment.restaurant}</a></span></p>
          <div className="review">
            <p>{this.props.comment.comment}</p>
            <a href="#" className="restaurant-src">Explore More</a>
          </div>
        </section>
      </article>
    )
  }
});

module.exports = HomepageUserComment;
