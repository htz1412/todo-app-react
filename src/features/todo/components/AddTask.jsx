import { forwardRef, useContext, useState } from "react";
import ReactDatePicker from "react-datepicker";
import ReactDropdown from "react-dropdown";
import { v4 as uuidv4 } from "uuid";

import Button from "../../shared/components/Button";

import { TODO_STATUS } from "../../shared/constants/todo";
import { TODO_PRIORITY } from "../../shared/constants/todo";
import { TodoContext } from "../contexts/TodoProvider";

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

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [priority, setPriority] = useState(null);
  const [status, setStatus] = useState(null);
  const { todos, setTodos } = useContext(TodoContext);

  const addNewTask = () => {
    if (title) {
      const newTask = {
        id: uuidv4(),
        title,
        description,
        dueDate: (dueDate && dueDate.toLocaleDateString()) || null,
        priority,
        status: status || TODO_STATUS.TODO,
        createdDate: new Date(),
      };

      setTodos([...todos, newTask]);
      clearValues();
    }
  };

  const clearValues = () => {
    setTitle("");
    setDescription("");
    setDueDate(null);
    setPriority(null);
    setStatus(null);
  };

  return (
    <div className="add-task">
      <input
        id="title"
        type="text"
        placeholder="Add a task"
        className="todo-input input-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="description"
        id="description"
        className="todo-input input-description custom-scroll-bar"
        cols="10"
        rows="5"
        placeholder="Description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="todo-action-group">
        <div className="todo-item-attribute-actions">
          <ReactDatePicker
            selected={dueDate}
            onChange={setDueDate}
            value={dueDate || "Due Date"}
            customInput={<DateTimeButton />}
          />
          <ReactDropdown
            options={priorities}
            onChange={(x) => setPriority(x.value)}
            value={priority}
            placeholder="Priority"
            className="todo-priority"
          />
          <ReactDropdown
            options={statuses}
            onChange={(x) => setStatus(x.value)}
            value={status}
            placeholder="Status"
            className="todo-status"
          />
        </div>
        <div className="confirmation-actions">
          <Button onClick={addNewTask}>Add Task</Button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
