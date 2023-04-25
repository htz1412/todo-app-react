import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import {
  SwipeAction,
  SwipeableList,
  TrailingActions,
} from "react-swipeable-list";
import { TodoContext } from "../contexts/TodoProvider";
import { STATUS_TABS, TODO_STATUS } from "../../shared/constants/todo";
import { StatusTabContext } from "../contexts/StatusTabProvider";

const TodoContent = (props) => {
  const { selectedTab } = useContext(StatusTabContext);
  const { todos, setTodos } = useContext(TodoContext);

  const todosToDisplay =
    selectedTab !== STATUS_TABS.ALL
      ? todos.filter((x) => x.status === selectedTab)
      : todos;

  const renderTrailingActions = (todoId) => (
    <TrailingActions>
      <SwipeAction onClick={() => handleDelete(todoId)}>Delete</SwipeAction>
    </TrailingActions>
  );

  const handleDelete = (todoId) => {
    if (todoId) {
      setTodos(todosToDisplay.filter((x) => x.id !== todoId));
    }
  };

  const toggleTaskStatus = (todoId) => {
    if (todoId) {
      const todo = todos.find((x) => x.id === todoId);
      todo.status =
        todo.status !== TODO_STATUS.COMPLETED
          ? TODO_STATUS.COMPLETED
          : TODO_STATUS.TODO;

      setTodos([...todos]);
    }
  };

  return (
    <div className="todo-content">
      {todosToDisplay.length > 0 ? (
        <SwipeableList>
          {todosToDisplay.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              toggleTaskStatus={toggleTaskStatus}
              renderTrailingActions={renderTrailingActions}
            />
          ))}
        </SwipeableList>
      ) : (
        <span>No tasks...</span>
      )}
    </div>
  );
};

export default TodoContent;
