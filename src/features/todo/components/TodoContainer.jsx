import React from "react";
import Todo from "./Todo";
import "../styles/index.css";
import AddTask from "./AddTask";

const TodoContainer = (props) => {
  return (
    <div className="todo-container">
      <Todo />
      <AddTask></AddTask>
    </div>
  );
};

export default TodoContainer;
