import { forwardRef, useContext } from "react";
import ReactDatePicker from "react-datepicker";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";

import { TodoContext } from "../contexts/TodoProvider";
import useNewTask from "../hooks/useNewTask";

import { TASK_FIELD } from "../constants/taskFields";
import { PRIORITIES, STATUSES } from "./../constants/addTaskConstants";

import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";

const DateTimeButton = forwardRef(({ value, onClick }, ref) => (
  <Button variant="secondary" onClick={onClick} ref={ref}>
    {value}
  </Button>
));

const AddTask = (props) => {
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
        onChange={({ target }) =>
          updateNewTaskField(TASK_FIELD.TITLE, target.value)
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
          updateNewTaskField(TASK_FIELD.DESCRIPTION, target.value)
        }
      />
      <div className="todo-action-group">
        <div className="todo-item-attribute-actions">
          <ReactDatePicker
            name="dueDate"
            selected={newTask.dueDate}
            onChange={(date) => {
              updateNewTaskField(TASK_FIELD.DUE_DATE, date);
            }}
            value={newTask.dueDate || "Due Date"}
            customInput={<DateTimeButton />}
          />
          <DropdownButton
            variant="secondary"
            id="priority"
            title={newTask.priority || "Priority"}
            onSelect={(priority) =>
              updateNewTaskField(TASK_FIELD.PRIORITY, priority)
            }
          >
            {PRIORITIES.map((priority) => (
              <Dropdown.Item
                key={priority}
                eventKey={priority}
                active={newTask.priority === priority}
              >
                {priority}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton
            variant="secondary"
            id="status"
            title={newTask.status || "Status"}
            onSelect={(status) => updateNewTaskField(TASK_FIELD.STATUS, status)}
          >
            {STATUSES.map((status) => (
              <Dropdown.Item
                key={status}
                eventKey={status}
                active={newTask.status === status}
              >
                {status}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
        <div className="confirmation-actions">
          <Button disabled={!newTask.title} onClick={addNewTask}>
            Add Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
