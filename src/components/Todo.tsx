import { todoType } from "../types/TodoType";
const Todo = (todo: todoType) => {
	return (
		<div>
			<b>
				<p>
					{todo.title}
					<button>Done</button>
				</p>
			</b>
			<p>{todo.description}</p>
			<p>{todo.deadline}</p>
			<p>{todo.done ? "Done" : "Not Done"}</p>
		</div>
	);
};

export default Todo;
