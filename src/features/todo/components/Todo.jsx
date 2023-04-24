import StatusTabs from "./StatusTabs";
import { StatusTabProvider } from "../contexts/StatusTabProvider";
import TodoContent from "./TodoContent";
import { STATUS_TABS } from "../../shared/constants/todo";

const Todo = (props) => {
  const statusTabs = [
    STATUS_TABS.ALL,
    STATUS_TABS.TODO,
    STATUS_TABS.IN_PROGRESS,
    STATUS_TABS.COMPLETED,
  ];

  return (
    <div className="todo">
      <StatusTabProvider>
        <StatusTabs tabs={statusTabs} />
        <TodoContent />
      </StatusTabProvider>
    </div>
  );
};

export default Todo;
