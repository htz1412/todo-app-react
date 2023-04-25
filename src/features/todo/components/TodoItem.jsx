import React, { useState } from "react";
import IncompleteTaskIcon from "../../../assets/icon_incomplete_task.png";
import CompleteTaskIcon from "../../../assets/icon_completed_task.png";
import { TODO_STATUS } from "../../shared/constants/todo";
import { TODO_PRIORITY_CLASSES } from "./../constants/todoPriorityClasses";
import TodoItemAttribute from "./TodoItemAttribute";
import { SwipeableListItem } from "react-swipeable-list";
import EditTaskModal from "./EditTaskModal";
import RenderIfTruthy from "../../shared/components/RenderIfTruthy";

const TodoItem = (props) => {
  const DELETE_THRESHOLD = 40;
  const {
    key,
    todo,
    renderTrailingActions,
    handleDelete,
    toggleTaskStatus,
    handleUpdateTodoField,
  } = props;
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

  let allowEditTask = true;
  const isCompletedTask = todo.status === TODO_STATUS.COMPLETED;
  const StatusToggleIcon = isCompletedTask
    ? CompleteTaskIcon
    : IncompleteTaskIcon;
  const title = isCompletedTask ? <s>{todo.title}</s> : todo.title;
  const todoItemClasses = `todo-item ${
    isCompletedTask ? "completed" : "incomplete"
  }`;

  const handleOnSwipeStart = () => (allowEditTask = false);

  const handleOnSwipeProgress = (progress) => {
    if (progress >= DELETE_THRESHOLD) {
      handleDelete(todo.id);
    }
  };

  const handleEditTask = () => {
    if (allowEditTask) {
      setShowEditTaskModal(true);
    }
    allowEditTask = true;
  };

  return (
    <React.Fragment key={key}>
      <SwipeableListItem
        trailingActions={renderTrailingActions(todo.id)}
        onSwipeProgress={handleOnSwipeProgress}
        onSwipeStart={handleOnSwipeStart}
      >
        <div className={todoItemClasses}>
          <img
            className="task-status-toggle-icon"
            src={StatusToggleIcon}
            alt="Task Status Icon"
            onClick={() => toggleTaskStatus(todo.id)}
          />
          <div className="todo-item-details" onClick={handleEditTask}>
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
      </SwipeableListItem>
      <RenderIfTruthy condition={showEditTaskModal}>
        <EditTaskModal
          todo={todo}
          handleUpdateTodoField={handleUpdateTodoField}
          modalProps={{
            show: showEditTaskModal,
            onHide: () => setShowEditTaskModal(false),
          }}
        />
      </RenderIfTruthy>
    </React.Fragment>
  );
};

export default TodoItem;
