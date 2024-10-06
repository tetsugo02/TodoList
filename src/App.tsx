import AddNewTodo from "./components/AddNew";
import TodoList from "./components/TodoList";

function App() {
	return (
		<>
			<TodoList isDone={false} />
			<TodoList isDone={true} />
			<AddNewTodo />
		</>
	);
}

export default App;
