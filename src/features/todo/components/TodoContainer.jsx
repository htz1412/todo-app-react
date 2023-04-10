import React, { useContext, useState } from "react";
import Todo from "./Todo";
import "../styles/index.css";
import AddTask from "./AddTask";
import { STATUS_TABS } from "../../shared/constants/todo";
import { TodoContext } from "../contexts/TodoProvider";

const TodoContainer = (props) => {
  const statusTabs = [
    STATUS_TABS.ALL,
    STATUS_TABS.TODO,
    STATUS_TABS.IN_PROGRESS,
    STATUS_TABS.COMPLETED,
  ];
  const [selectedStatusTab, setSelectedStatusTab] = useState(STATUS_TABS.ALL);
  const { todos } = useContext(TodoContext);

  const todosToDisplay =
    selectedStatusTab !== STATUS_TABS.ALL
      ? todos.filter((x) => x.status === selectedStatusTab)
      : todos;

  return (
    <div className="todo-container">
      <Todo
        tabs={statusTabs}
        selectedTab={selectedStatusTab}
        setSelectedTab={setSelectedStatusTab}
        todos={todosToDisplay}
      />
      <AddTask />
    </div>
  );
};

export default TodoContainer;
