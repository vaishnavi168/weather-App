var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');
//load foundation css
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css')
$(document).foundation();
//include custom css
require('style-loader!css-loader!sass-loader!AppCss')
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    	<Route path="about" component={About}/>
    	<Route path="example" component={Example}/>
    	<IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
