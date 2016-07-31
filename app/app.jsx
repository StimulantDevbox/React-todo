var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//load foundation-sites


$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
<p>
  Boilerplate3

</p>,
  document.getElementById('app')
);
