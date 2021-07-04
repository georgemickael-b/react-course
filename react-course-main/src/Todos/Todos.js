import React from "react";
import DoneList from "../DoneList";
import TodosList from "../TodosList";

let todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    deleted: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
    deleted: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
    deleted: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
    deleted: false,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
    deleted: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
    deleted: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
    deleted: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
    deleted: false,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
    deleted: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
    deleted: false,
  },
];

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos,
    };
    // this.getTodoItems = this.getTodoItems.bind(this);
  }

  getTodoItems = () => this.state.todos.filter((todo) => !todo.completed);
  getDoneItems = () => this.state.todos.filter((todo) => todo.completed);

  toggleTodoCompleted = (todoId) => {
    const tempTodos = [...this.state.todos];
    const todo = tempTodos.find((todo) => todo.id === todoId);
    todo.completed = !todo.completed;
    this.setState({ todos: tempTodos });
  };

  deleteTodo = (todoId) => {
    const tempTodos = [...this.state.todos];
    const todo = tempTodos.find((todo) => todo.id === todoId);
    todo.deleted = true;
    this.setState({ todos: tempTodos });
  };

  render() {
    return (
      <div className="container">
        <h4>Todos</h4>
        <div className="row">
          <div className="col-md-6">
            <TodosList
              deleteTodo={this.deleteTodo}
              toggleTodoCompleted={this.toggleTodoCompleted}
              items={this.getTodoItems()}
            ></TodosList>
          </div>
          <div className="col-md-6">
            <DoneList items={this.getDoneItems()}></DoneList>
          </div>
        </div>
      </div>
    );
  }
}

export default Todos;
