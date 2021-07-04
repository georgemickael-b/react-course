import React from "react";
class TodosList extends React.Component {
  render() {
    const { items, toggleTodoCompleted, deleteTodo } = this.props;
    return (
      <>
        <h5>Todo items</h5>
        {items.map((item) => {
          return (
            <>
              {item.deleted === false && (
                <div className="card mb-2">
                  <div class="card-body">
                    <p className="card-text">{item.title}</p>
                    <button
                      onClick={() => toggleTodoCompleted(item.id)}
                      className="btn btn-primary"
                    >
                      Done
                    </button>
                    <button
                      onClick={() => deleteTodo(item.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </>
    );
  }
}

export default TodosList;
