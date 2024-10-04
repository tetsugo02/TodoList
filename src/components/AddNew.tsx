import { useContext, useState } from "react";
import { TodoType } from "../types/TodoType";
import { v4 as uuidv4 } from "uuid";
import TodoListDataContext from "../contexts/TodoListData";

const AddNewTodo = () => {
	const todoContext = useContext(TodoListDataContext);
	if (!todoContext) {
		throw new Error("TodoListDataProvider must be used within a TodoListDataProvider");
	}
	const { todos, setTodos } = todoContext;

	const [newTodo, setNewTodo] = useState<TodoType>({
		id: "",
		title: "",
		description: "",
		done: false,
		deadline: "",
	});

	const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNewTodo((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const handleAddTodo = () => {
		const newTodoWithId: TodoType = {
			...newTodo,
			id: uuidv4(),
		};
		setTodos([...todos, newTodoWithId]);
	};
	return (
		<div>
			<div>
				<input type="text" placeholder="Title" name="title" value={newTodo.title} onChange={onHandleChange} />
			</div>
			<div>
				<input type="text" placeholder="Description" name="description" value={newTodo.description} onChange={onHandleChange} />
			</div>
			<div>
				<input type="date" name="deadline" value={newTodo.deadline} onChange={onHandleChange} />
			</div>
			<button onClick={handleAddTodo}>Add</button>
		</div>
	);
};

export default AddNewTodo;
