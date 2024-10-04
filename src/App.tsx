import "./App.css";
import AddNewTodo from "./components/AddNew";
import TodoList from "./components/TodoList";

function App() {
	return (
		<>
			<TodoList isDone={false} />
			<AddNewTodo />
		</>
	);
}

export default App;
