import Todo from "./Todo";
import { useContext } from "react";
import TodoListDataContext from "../contexts/TodoListData";

interface TodoListProps {
	done: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ done }) => {
	const todoListData = useContext(TodoListDataContext);
	return (
		<div>
			<h2>Todo List({done ? "done" : "WIP"})</h2>
			{todoListData
				.filter((todo) => {
					return todo.done === done;
				})
				.map((todo) => (
					<Todo key={todo.id} {...todo} />
				))}
		</div>
	);
};

export default TodoList;
