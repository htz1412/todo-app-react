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

  const getTodoById = (todoId) => todos.find((x) => x.id === todoId) || null;

  const handleDelete = (todoId) => {
    if (todoId) {
      setTodos(todosToDisplay.filter((x) => x.id !== todoId));
    }
  };

  const handleUpdateTodoField = (e, todoId) => {
    const todo = getTodoById(todoId);
    if (todo) {
      todo[e.name] = e.value;
      setTodos([...todos]);
    }
  };

  const toggleTaskStatus = (todoId) => {
    const todo = getTodoById(todoId);
    if (todo) {
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
              handleUpdateTodoField={handleUpdateTodoField}
              handleDelete={handleDelete}
              toggleTaskStatus={toggleTaskStatus}
              renderTrailingActions={renderTrailingActions}
            />
          ))}
        </SwipeableList>
      ) : (
        <h6 className="text-secondary">No tasks</h6>
      )}
    </div>
  );
};

export default TodoContent;
