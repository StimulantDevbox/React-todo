var React = require('react');
var TodoList = require('TodoList');
var ToDoApp = React.createClass({

      getInitialState: function () {
            return {
                  todos: [
                       {
                           id: 1,
                           text: 'Walk the dog',
                           time: '30 mins'
                      }, {
                           id: 2,
                           text: 'Clean the yard',
                           time: '30 mins'
                     }, {
                        id: 3,
                        text: 'Do work',
                        time: '90 mins'
                  }, {
                     id: 4,
                     text: 'Be awesome!!',
                     time: 'All day every day'
                  }
                  ]
            };
      },
      render: function () {
            var {todos} = this.state;
            return (
                  <div>
                       <TodoList todos = {todos}/>
                 </div>
           )
     }
});

module.exports = ToDoApp;
