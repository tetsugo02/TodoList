import "./App.css";
import TodoList from "./components/TodoList";
import { TodoListdata } from "./tmp";


function App() {
  return (
    <>
    <TodoList todoListData={TodoListdata} />
    </>
  );
}

export default App;
