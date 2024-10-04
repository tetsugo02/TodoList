import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import dayjs, { Dayjs } from "dayjs";

import { TodoType } from "../types/TodoType";
import TodoListDataContext from "../contexts/TodoListData";
import BasicDatePicker from "./styled/TimePicker";

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
		setNewTodo((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleDateChange = (date: Dayjs | null) => {
		if (date) {
			setNewTodo((prev) => ({
				...prev,
				deadline: date.format("YYYY-MM-DD"),
			}));
		}
	};

	const handleAddTodo = () => {
		const newTodoWithId: TodoType = {
			...newTodo,
			id: uuidv4(),
		};
		setTodos([...todos, newTodoWithId]);
		setNewTodo({
			id: "",
			title: "",
			description: "",
			done: false,
			deadline: "",
		});
	};

	return (
		<div>
			<div>
				<input
					type="text"
					placeholder="Title"
					name="title"
					value={newTodo.title}
					required
					onChange={onHandleChange}
				/>
			</div>
			<div>
				<input
					type="text"
					placeholder="Description"
					name="description"
					value={newTodo.description}
					onChange={onHandleChange}
				/>
			</div>
			<div>
				<BasicDatePicker value={dayjs(newTodo.deadline)} onChange={handleDateChange} />
			</div>
			<button onClick={handleAddTodo}>Add</button>
		</div>
	);
};

export default AddNewTodo;
