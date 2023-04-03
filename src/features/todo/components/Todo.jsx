import StatusTabs from "./StatusTabs";
import TodoContent from './TodoContent';

const Todo = (props) => {
  return (
    <div className="todo">
      <StatusTabs></StatusTabs>
      <TodoContent></TodoContent>
    </div>
  );
};

export default Todo;
