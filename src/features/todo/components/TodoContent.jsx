import React, { useContext } from "react";
import {
  SwipeAction,
  SwipeableList,
  TrailingActions,
} from "react-swipeable-list";
import { Fade } from "react-awesome-reveal";

import { TodoContext } from "../contexts/TodoProvider";
import { StatusTabContext } from "../contexts/StatusTabProvider";
import TodoItem from "./TodoItem";

import { STATUS_TABS, TODO_STATUS } from "../../shared/constants/todo";

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

  const handleUpdateTodoField = (updatedTask) => {
    setTodos((todos) =>
      todos.map((task) => {
        if (task.id === updatedTask.id) {
          return { ...updatedTask };
        }
        return task;
      })
    );
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
          <Fade direction="down" cascade damping={0.1} duration={800}>
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
          </Fade>
        </SwipeableList>
      ) : (
        <Fade direction="down" duration={800}>
          <h6 className="text-secondary">No tasks</h6>
        </Fade>
      )}
    </div>
  );
};

export default TodoContent;
