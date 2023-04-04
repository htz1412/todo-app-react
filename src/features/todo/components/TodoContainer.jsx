import React, { useState } from "react";
import Todo from "./Todo";
import "../styles/index.css";
import AddTask from "./AddTask";

const TodoContainer = (props) => {
  const tabs = ["All", "Todo", "In Progress", "Completed"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const todos = [
    {
      title: "Complete main UI components",
      description:
        "Would be good if we include every componenets in design system...",
      dueDate: "6 Apr 2023",
      priority: "Medium",
      status: "Todo",
    },
    {
      title: "Landing page design",
      description: null,
      dueDate: "10 Apr 2023",
      priority: "Hard",
      status: "Completed",
    },
    {
      title: "Brand guidelines",
      description: null,
      dueDate: null,
      priority: "Low",
      status: "Todo",
    },
  ];

  const activeTodos = todos.filter((x) => x.status === selectedTab);

  return (
    <div className="todo-container">
      <Todo
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={activeTodos}
      />
      <AddTask></AddTask>
    </div>
  );
};

export default TodoContainer;
