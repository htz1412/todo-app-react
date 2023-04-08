import React from "react";
import RenderIfTruthy from "../../shared/components/RenderIfTruthy";
import IncompleteTaskIcon from "../../../assets/icon_incomplete_task.png";
import CompleteTaskIcon from "../../../assets/icon_completed_task.png";
import { TODO_STATUSES } from "../../shared/constants/todo";

const TodoItem = (props) => {
  const { todo, key } = props;
  const isCompletedTask = todo.status === TODO_STATUSES.COMPLETED;
  const StatusToggleIcon = isCompletedTask
    ? CompleteTaskIcon
    : IncompleteTaskIcon;
  const title = isCompletedTask ? <s>{todo.title}</s> : todo.title;
  const todoItemDetailClasses = `todo-item-details${
    isCompletedTask ? " completed" : ""
  }`;

  return (
    <div key={key} className="todo-item">
      <img
        className="task-status-toggle-icon"
        src={StatusToggleIcon}
        alt="Incomplete Task"
      />
      <div className={todoItemDetailClasses}>
        <span className="todo-title">{title}</span>
        <span className="todo-description">{todo.description}</span>
        <div className="todo-item-attributes">
          <RenderIfTruthy value={todo.dueDate}>
            <React.Fragment>
              <div className="todo-item-attribute">
                <i className="fa fa-calendar-o" aria-hidden="true"></i>
                <span>{todo.dueDate}</span>
              </div>
              <span className="todo-item-attribute-seperator">&bull;</span>
            </React.Fragment>
          </RenderIfTruthy>
          <RenderIfTruthy value={todo.priority}>
            <div className="todo-item-attribute">
              <i className="fa fa-flag-o" aria-hidden="true" />
              <span>{todo.priority}</span>
            </div>
          </RenderIfTruthy>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
