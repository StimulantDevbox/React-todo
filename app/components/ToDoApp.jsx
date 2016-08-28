var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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

      handleAddTodo: function (text) {
        alert('new todo: ' + text);
      },

      render: function () {
            var {todos} = this.state;
            return (
                  <div>
                       <TodoList todos = {todos}/>
                       <AddTodo onAddTodo={this.handleAddTodo}/>
                 </div>
           )
     }
});

module.exports = ToDoApp;
