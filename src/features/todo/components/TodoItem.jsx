import React from "react";
import IncompleteTaskIcon from "../../../assets/icon_incomplete_task.png";
import CompleteTaskIcon from "../../../assets/icon_completed_task.png";
import { TODO_STATUSES } from "../../shared/constants/todo";
import { TODO_PRIORITY_CLASSES } from "./../constants/todoPriorityClasses";
import TodoItemAttribute from "./TodoItemAttribute";

const TodoItem = (props) => {
  const { todo, key } = props;
  const isCompletedTask = todo.status === TODO_STATUSES.COMPLETED;
  const StatusToggleIcon = isCompletedTask
    ? CompleteTaskIcon
    : IncompleteTaskIcon;
  const title = isCompletedTask ? <s>{todo.title}</s> : todo.title;
  const todoItemClasses = `todo-item ${
    isCompletedTask ? "completed" : "incomplete"
  }`;

  return (
    <div key={key} className={todoItemClasses}>
      <img
        className="task-status-toggle-icon"
        src={StatusToggleIcon}
        alt="Incomplete Task"
      />
      <div className="todo-item-details">
        <span className="todo-title">{title}</span>
        <span className="todo-description">{todo.description}</span>
        <div className="todo-item-attributes">
          <TodoItemAttribute
            value={todo.dueDate}
            iconClassNames="fa fa-calendar-o"
            addSeperator
          />
          <TodoItemAttribute
            classNames={TODO_PRIORITY_CLASSES[todo.priority]}
            value={todo.priority}
            iconClassNames="fa fa-flag-o"
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
