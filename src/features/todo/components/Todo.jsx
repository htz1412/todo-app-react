import StatusTabs from "./StatusTabs";
import TodoContent from "./TodoContent";

const Todo = (props) => {
  const { tabs, selectedTab, setSelectedTab, todos } = props;
  return (
    <div className="todo">
      <StatusTabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoContent todos={todos} />
    </div>
  );
};

export default Todo;
