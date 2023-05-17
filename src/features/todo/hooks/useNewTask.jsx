import { useState } from "react";
import { v4 as uuid } from "uuid";
import { TODO_STATUS } from "../../shared/constants/todo";

function useNewTask(task = null) {
  const initialTaskValues = {
    title: "",
    description: "",
    dueDate: null,
    priority: null,
    status: TODO_STATUS.TODO,
  };
  const [newTask, setTask] = useState(task || initialTaskValues);

  function updateNewTaskField(field, value) {
    setTask((oldTask) => {
      oldTask[field] = value;
      return { ...oldTask };
    });
  }

  function prepareNewTask() {
    if (newTask.title) {
      setTask((oldTask) => {
        oldTask.id = uuid();
        oldTask.createdDate = new Date();
        return { ...oldTask };
      });
    }
  }

  function clearNewTask() {
    setTask(initialTaskValues);
  }

  return {
    newTask,
    updateNewTaskField,
    prepareNewTask,
    clearNewTask,
  };
}

export default useNewTask;
