import Todo from "./Todo";
import { useContext, useState } from "react";
import TodoListDataContext from "../contexts/TodoListData";
import { TodoType } from "../types/TodoType";

interface TodoListProps {
	isDone: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ isDone }) => {
	const todoListData = useContext(TodoListDataContext);
	const [todos, setTodos] = useState<TodoType[]>(todoListData);

	const onToggleDone = (id: string) => {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, done: !todo.done };
				}
				return todo;
			});
		});
	};

	return (
		<div>
			<h2>Todo List({isDone ? "done" : "WIP"})</h2>
			{todos
				.filter((todo) => {
					return todo.done === isDone;
				})
				.map((todo) => (
					<Todo key={todo.id} {...todo} onToggle={onToggleDone} />
				))}
		</div>
	);
};

export default TodoList;
