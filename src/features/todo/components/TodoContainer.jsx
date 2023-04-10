import React, { useState } from "react";
import Todo from "./Todo";
import "../styles/index.css";
import AddTask from "./AddTask";
import {
  STATUS_TABS,
  TODO_PRIORITY,
  TODO_STATUSES,
} from "../../shared/constants/todo";

const TodoContainer = (props) => {
  const getTodosToDisplay = (statusTab) =>
    statusTab !== STATUS_TABS.ALL
      ? todos.filter((x) => x.status === statusTab)
      : todos;

  const statusTabs = [
    STATUS_TABS.ALL,
    STATUS_TABS.TODO,
    STATUS_TABS.IN_PROGRESS,
    STATUS_TABS.COMPLETED,
  ];
  const [selectedStatusTab, setSelectedStatusTab] = useState(STATUS_TABS.ALL);
  const todos = [
    // {
    //   title: "Complete main UI components",
    //   description:
    //     "Would be good if we include every componenets in design system...",
    //   dueDate: "6 Apr 2023",
    //   priority: TODO_PRIORITY.MEDIUM,
    //   status: TODO_STATUSES.TODO,
    // },
    // {
    //   title: "Brand guidelines",
    //   description: null,
    //   dueDate: null,
    //   priority: TODO_PRIORITY.LOW,
    //   status: TODO_STATUSES.TODO,
    // },
    // {
    //   title: "Find and fix the bug in GJR project",
    //   description: "Some users are not allowed to enter restrain events",
    //   dueDate: "9 Apr 2023",
    //   priority: TODO_PRIORITY.HIGH,
    //   status: TODO_STATUSES.IN_PROGRESS,
    // },
    // {
    //   title: "Landing page design",
    //   description: null,
    //   dueDate: "10 Apr 2023",
    //   priority: TODO_PRIORITY.HIGH,
    //   status: TODO_STATUSES.COMPLETED,
    // },
    {
      title: "Complete main UI components",
      description:
        "Would be good if we include every componenets in design system...",
      dueDate: "6 Apr 2023",
      priority: TODO_PRIORITY.MEDIUM,
      status: TODO_STATUSES.TODO,
    },
    {
      title: "Brand guidelines",
      description: "Dummy description",
      dueDate: null,
      priority: TODO_PRIORITY.LOW,
      status: TODO_STATUSES.TODO,
    },
    {
      title: "Find and fix the bug in GJR project",
      description: "Some users are not allowed to enter restrain events",
      dueDate: "9 Apr 2023",
      priority: TODO_PRIORITY.HIGH,
      status: TODO_STATUSES.IN_PROGRESS,
    },
    {
      title: "Landing page design",
      description: "Dummy description",
      dueDate: "10 Apr 2023",
      priority: TODO_PRIORITY.HIGH,
      status: TODO_STATUSES.COMPLETED,
    },
    {
      title: "Brand guidelines",
      description: "Dummy description",
      dueDate: null,
      priority: TODO_PRIORITY.LOW,
      status: TODO_STATUSES.TODO,
    },
    {
      title: "Complete main UI components",
      description:
        "Would be good if we include every componenets in design system...",
      dueDate: "6 Apr 2023",
      priority: TODO_PRIORITY.MEDIUM,
      status: TODO_STATUSES.TODO,
    },
  ];
  const todosToDisplay = getTodosToDisplay(selectedStatusTab);

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
