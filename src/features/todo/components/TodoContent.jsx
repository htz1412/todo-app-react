import React from "react";

const TodoContent = (props) => {
  const { todos } = props;
  return (
    <div className="todo-content">
      {todos.map((todo, index) => {
        return (
          <React.Fragment>
            <ul key={index}>
              <li>{todo.title}</li>
              {todo.description && <li>{todo.description}</li>}
              {todo.priority && <li>{todo.priority}</li>}
              {todo.dueDate && <li>{todo.dueDate}</li>}
              <li>{todo.status}</li>
            </ul>
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TodoContent;
