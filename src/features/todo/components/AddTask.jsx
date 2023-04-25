import { forwardRef, useContext } from "react";
import ReactDatePicker from "react-datepicker";
import ReactDropdown from "react-dropdown";
import { Button } from "react-bootstrap";

// import Button from "../../shared/components/Button";

import { TODO_STATUS } from "../../shared/constants/todo";
import { TODO_PRIORITY } from "../../shared/constants/todo";
import { TodoContext } from "../contexts/TodoProvider";

import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";
import useNewTask from "../hooks/useNewTask";

const DateTimeButton = forwardRef(({ value, onClick }, ref) => (
  <button className="button outline medium" onClick={onClick} ref={ref}>
    {value}
  </button>
));

const AddTask = (props) => {
  const priorities = [
    TODO_PRIORITY.LOW,
    TODO_PRIORITY.MEDIUM,
    TODO_PRIORITY.HIGH,
  ];
  const statuses = [
    TODO_STATUS.TODO,
    TODO_STATUS.IN_PROGRESS,
    TODO_STATUS.COMPLETED,
  ];

  const { todos, setTodos } = useContext(TodoContext);
  const { newTask, updateNewTaskField, prepareNewTask, clearNewTask } =
    useNewTask();

  const addNewTask = () => {
    if (newTask.title) {
      prepareNewTask();
      setTodos([...todos, newTask]);
      clearNewTask();
    }
  };

  return (
    <div className="add-task">
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Add a title"
        className="todo-input input-title"
        value={newTask.title}
        onChange={updateNewTaskField}
      />
      <textarea
        name="description"
        id="description"
        className="todo-input input-description custom-scroll-bar"
        cols="10"
        rows="5"
        placeholder="Description..."
        value={newTask.description}
        onChange={updateNewTaskField}
      />
      <div className="todo-action-group">
        <div className="todo-item-attribute-actions">
          <ReactDatePicker
            name="dueDate"
            selected={newTask.dueDate && newTask.dueDate.toLocaleDateString()}
            onChange={updateNewTaskField}
            value={
              (newTask.dueDate && newTask.dueDate.toLocaleDateString()) ||
              "Due Date"
            }
            customInput={<DateTimeButton />}
          />
          <ReactDropdown
            name="priority"
            options={priorities}
            onChange={updateNewTaskField}
            value={newTask.priority}
            placeholder="Priority"
            className="todo-priority"
          />
          <ReactDropdown
            name="status"
            options={statuses}
            onChange={updateNewTaskField}
            value={newTask.status}
            placeholder="Status"
            className="todo-status"
          />
        </div>
        <div className="confirmation-actions">
          <Button size="sm" disabled={!newTask.title} onClick={addNewTask}>
            Add Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
