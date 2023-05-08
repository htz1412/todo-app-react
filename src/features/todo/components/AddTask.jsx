import { forwardRef, useContext } from "react";
import ReactDatePicker from "react-datepicker";
import ReactDropdown from "react-dropdown";
import { Button } from "react-bootstrap";

import { TODO_STATUS, TODO_PRIORITY } from "../../shared/constants/todo";
import { TodoContext } from "../contexts/TodoProvider";
import useNewTask from "../hooks/useNewTask";

import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";

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

  const convertDateToLocalString = (date) => date || null;

  return (
    <div className="add-task">
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Add a title"
        className="todo-input input-title"
        value={newTask.title}
        onChange={({ target }) =>
          updateNewTaskField({ field: target.name, value: target.value })
        }
      />
      <textarea
        name="description"
        id="description"
        className="todo-input input-description custom-scroll-bar"
        cols="10"
        rows="5"
        placeholder="Description..."
        value={newTask.description}
        onChange={({ target }) =>
          updateNewTaskField({ field: target.name, value: target.value })
        }
      />
      <div className="todo-action-group">
        <div className="todo-item-attribute-actions">
          <ReactDatePicker
            name="dueDate"
            selected={convertDateToLocalString(newTask.dueDate)}
            onChange={(date) =>
              updateNewTaskField({ field: "dueDate", value: date })
            }
            value={convertDateToLocalString(newTask.dueDate) || "Due Date"}
            customInput={<DateTimeButton />}
          />
          <ReactDropdown
            name="priority"
            options={priorities}
            onChange={(option) =>
              updateNewTaskField({ field: "priority", value: option.value })
            }
            value={newTask.priority}
            placeholder="Priority"
            className="todo-priority"
          />
          <ReactDropdown
            name="status"
            options={statuses}
            onChange={(option) =>
              updateNewTaskField({ field: "status", value: option.value })
            }
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
