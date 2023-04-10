import Page from "./features/layout/components/Page";
import TodoContainer from "./features/todo/components/TodoContainer";
import { TodoProvider } from "./features/todo/contexts/TodoProvider";

const App = () => {
  return (
    <Page>
      <TodoProvider>
        <TodoContainer />
      </TodoProvider>
    </Page>
  );
};

export default App;
