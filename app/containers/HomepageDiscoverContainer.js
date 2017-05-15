var React = require('react');
const uuidV4 = require('uuid'); //TODO: UUID will be from Axios call, not here
var HomepageMustTrySection = require('../components/HomepageMustTrySection');
var HomepageTopTen = require('../components/HomepageTopTen');
var HomepageComments = require('../components/HomepageComments');


var HomepageDiscoverContainer = React.createClass({
  getInitialState: function(){
    return {
      mustTry: [],
      popularAround: [],
      homepageComments: []
    }
  },
  componentDidMount: function(){
    this.setState({
      mustTry: [
        {
          id: uuidV4.v4(),
          restName: "Abbey's BBQ",
          description: "Lorem ipsum asdl;fjasd;lfj"
        },
        {
          id: uuidV4.v4(),
          restName: "Chitz and Blitz",
          description: 'Lorem ipsum wubba lubba dub dub'
        },
        {
          id: uuidV4.v4(),
          restName: "Mona Lisa Sandwhich",
          description: "adf;lkja;ldsfj"
        },
        {
          id: uuidV4.v4(),
          restName: 'Kula Sushi',
          description: 'Lorem ipsum dolor'
        }
      ],
      popularAround: [
          'Rest 1',
          'Rest 2',
          'Rest 3',
          'Rest 4',
          'Rest 5',
          'Rest 6',
          'Rest 7',
          'Rest 8',
          'Rest 9',
          'Rest 10',
      ],
      homepageComments: [
        {
          id: uuidV4.v4(),
          userImage: 'https://placehold.it/80x80',
          userName: 'Johhny Duke',
          rating: '4',
          dish: 'Chicken Alfredo',
          restaurant: "Juan's Italian restaurant",
          comment: 'Lorem a;sdjfa;dslfjdslfajlkdsjaf ladsfkjldaskjfl dljdsalfjldsakfjlkj l ldsakjfldksjaf ldksjf  ldsakjf ldaskjf lds  adslfkjldskfjl dsaf lkdsjafljadsfl dksfj dlas fldaksfj ldskjf lad fl fladksjf ldasjfladsjfljsdfalkjdsalfjl  fladskjfljdsflkdjsflkjds af  lfadskjflkjadfldkajf  aldskfjladkjf ads.'
        },
        {
          id: uuidV4.v4(),
          userImage: 'https://placehold.it/80x80',
          userName: 'Paula REd',
          rating: '5',
          dish: 'Peanut Butter Sandwhich',
          restaurant: 'Just Like How Mom Made It',
          comment: 'Lorem a;sdjfa;dslfjdslfajlkdsjaf ladsfkjldaskjfl dljdsalfjldsakfjlkj l ldsakjfldksjaf ldksjf  ldsakjf ldaskjf lds  adslfkjldskfjl dsaf lkdsjafljadsfl dksfj dlas fldaksfj ldskjf lad fl fladksjf ldasjfladsjfljsdfalkjdsalfjl  fladskjfljdsflkdjsflkjds af  lfadskjflkjadfldkajf  aldskfjladkjf ads.'
        },
        {
          id: uuidV4.v4(),
          userImage: 'https://placehold.it/80x80',
          userName: 'Katherine Johnson',
          rating: '1',
          dish: 'Cheese Burger',
          restaurant: 'Sketchy Place Down the Road ',
          comment: 'Lorem a;sdjfa;dslfjdslfajlkdsjaf ladsfkjldaskjfl dljdsalfjldsakfjlkj l ldsakjfldksjaf ldksjf  ldsakjf ldaskjf lds  adslfkjldskfjl dsaf lkdsjafljadsfl dksfj dlas fldaksfj ldskjf lad fl fladksjf ldasjfladsjfljsdfalkjdsalfjl  fladskjfljdsflkdjsflkjds af  lfadskjflkjadfldkajf  aldskfjladkjf ads.'
        },
        {
          id: uuidV4.v4(),
          userImage: 'https://placehold.it/80x80',
          userName: 'Alberto Jose',
          rating: '4',
          dish: 'Pasta Pasta',
          restaurant: 'Italian Pasta Shop',
          comment: 'Lorem a;sdjfa;dslfjdslfajlkdsjaf ladsfkjldaskjfl dljdsalfjldsakfjlkj l ldsakjfldksjaf ldksjf  ldsakjf ldaskjf lds  adslfkjldskfjl dsaf lkdsjafljadsfl dksfj dlas fldaksfj ldskjf lad fl fladksjf ldasjfladsjfljsdfalkjdsalfjl  fladskjfljdsflkdjsflkjds af  lfadskjflkjadfldkajf  aldskfjladkjf ads.'
        },
        {
          id: uuidV4.v4(),
          userImage: 'https://placehold.it/80x80',
          userName: 'Rick Morty',
          rating: '3',
          dish: 'Spicy Chicken Sandwhich',
          restaurant: 'Pengest Chicken Shop',
          comment: 'Lorem a;sdjfa;dslfjdslfajlkdsjaf ladsfkjldaskjfl dljdsalfjldsakfjlkj l ldsakjfldksjaf ldksjf  ldsakjf ldaskjf lds  adslfkjldskfjl dsaf lkdsjafljadsfl dksfj dlas fldaksfj ldskjf lad fl fladksjf ldasjfladsjfljsdfalkjdsalfjl  fladskjfljdsflkdjsflkjds af  lfadskjflkjadfldkajf  aldskfjladkjf ads.'
        }
      ]
    })

  },
  render: function(){
      return (
        <div className="homepage-discover-container">
          <HomepageMustTrySection mustTry={this.state.mustTry} />
          <HomepageTopTen popularAround={this.state.popularAround} />
          <HomepageComments homepageComments={this.state.homepageComments} />
        </div>
      )
  }
});

module.exports = HomepageDiscoverContainer;
