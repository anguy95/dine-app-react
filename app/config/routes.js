var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute
var browserHistory = ReactRouter.browserHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');
var style = require('../styles/main.scss');

var routes = (

    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home} />
      </Route>
    </Router>

);

module.exports = routes;
