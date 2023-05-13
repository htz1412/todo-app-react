import { forwardRef, useContext } from "react";
import ReactDatePicker from "react-datepicker";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";

import { TodoContext } from "../contexts/TodoProvider";
import useNewTask from "../hooks/useNewTask";

import { TODO_STATUS, TODO_PRIORITY } from "../../shared/constants/todo";
import { TASK_FIELD } from "../constants/taskFields";

import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";

const DateTimeButton = forwardRef(({ value, onClick }, ref) => (
  <Button variant="secondary" onClick={onClick} ref={ref}>
    {value}
  </Button>
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
        onChange={({ target }) =>
          updateNewTaskField({ field: TASK_FIELD.TITLE, value: target.value })
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
          updateNewTaskField({
            field: TASK_FIELD.DESCRIPTION,
            value: target.value,
          })
        }
      />
      <div className="todo-action-group">
        <div className="todo-item-attribute-actions">
          <ReactDatePicker
            name="dueDate"
            selected={newTask.dueDate}
            onChange={(date) => {
              updateNewTaskField({ field: TASK_FIELD.DUE_DATE, value: date });
            }}
            value={newTask.dueDate || "Due Date"}
            customInput={<DateTimeButton />}
          />
          <DropdownButton
            variant="secondary"
            id="priority"
            title={newTask.priority || "Priority"}
            onSelect={(priority) =>
              updateNewTaskField({
                field: TASK_FIELD.PRIORITY,
                value: priority,
              })
            }
          >
            {priorities.map((priority) => (
              <Dropdown.Item key={priority} eventKey={priority} active={newTask.priority === priority}>
                {priority}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton
            variant="secondary"
            id="status"
            title={newTask.status || "Status"}
            onSelect={(status) =>
              updateNewTaskField({
                field: TASK_FIELD.STATUS,
                value: status,
              })
            }
          >
            {statuses.map((status) => (
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
