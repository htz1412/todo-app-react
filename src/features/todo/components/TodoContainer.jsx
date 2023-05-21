import React from "react";
import Todo from "./Todo";
import "../styles/index.css";
import AddTask from "./AddTask";
import { Button } from "react-bootstrap";

const TodoContainer = (props) => {
  const toggleNewTaskForm = () => {
    const addTaskButton = document.getElementById("add-task-button");
    addTaskButton.classList.toggle("collapsed");

    const addTaskFormContainer = document.getElementById(
      "add-task-form-container"
    );
    addTaskFormContainer.classList.toggle("expanded");
  };

  return (
    <div className="todo-container">
      <Todo />
      <div id="add-task-container">
        <Button
          id="add-task-button"
          className="w-100"
          variant="secondary"
          onClick={toggleNewTaskForm}
        >
          + Add Task
        </Button>
        <AddTask onToggleNewTaskForm={toggleNewTaskForm} />
      </div>
    </div>
  );
};

export default TodoContainer;
