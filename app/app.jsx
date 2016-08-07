var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var ToDoApp = require('ToDoApp');

//load foundation-sites


$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
<ToDoApp/>,
  document.getElementById('app')
);
