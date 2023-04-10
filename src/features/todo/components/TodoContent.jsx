import React from "react";
import TodoItem from "./TodoItem";

const TodoContent = (props) => {
  const { todos } = props;
  return (
    <div className="todo-content custom-scroll-bar">
      {todos.map((todo, index) => {
        return (
          <React.Fragment key={index}>
            <TodoItem todo={todo} />
            <hr className="todo-item-seperator" />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TodoContent;
