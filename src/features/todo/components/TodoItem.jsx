import React from "react";
// import RenderIfTruthy from "../../shared/components/RenderIfTruthy";
import IncompleteTaskIcon from "../../../assets/icon_incomplete_task.png";
import CompleteTaskIcon from "../../../assets/icon_completed_task.png";

const TodoItem = (props) => {
  const { todo, key } = props;
  return (
    <div key={key} className="todo-item">
      <img
        className="task-status-toggle-icon"
        src={CompleteTaskIcon}
        alt="Incomplete Task"
      />
      <div className="todo-item-details">
        <span className="todo-title">{todo.title}</span>
        <span className="todo-description">{todo.description}</span>
        <i class="fa fa-calendar-o" aria-hidden="true"></i>
        <span>{todo.dueDate}</span>
        <i class="fa fa-flag-o" aria-hidden="true" />
        <span>{todo.priority}</span>
      </div>
    </div>
  );
};

export default TodoItem;
