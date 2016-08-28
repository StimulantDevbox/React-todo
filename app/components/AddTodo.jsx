var React = require('react');

var AddTodo = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var NewTodo = this.refs.NewTodo.value;

    if (NewTodo.length > 0) {
      this.refs.NewTodo.value = '';
      this.props.onAddTodo(NewTodo);
    } else {
      this.refs.NewTodo.focus();
    }
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="NewTodo" placeholder="What do you need to do?"/>
            <button className="button expanded hollow">Add Todo</button>
          </form>
        </div>
    );
  }
});

module.exports = AddTodo;
