import React from "react";
import TodoItem from "./TodoItem";

const TodoContent = (props) => {
  const { todos } = props;
  return (
    <div className="todo-content">
      {todos.map((todo, index) => {
        return (
          <React.Fragment>
            <TodoItem key={index} todo={todo} />
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TodoContent;
