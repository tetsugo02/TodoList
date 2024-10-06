import { TodoType } from "../types/TodoType";

const loadTodos = (): TodoType[] => {
	const todos = localStorage.getItem("todos");
	return todos ? JSON.parse(todos) : [];
};

const saveTodos = (todos: TodoType[]) => {
	localStorage.setItem("todos", JSON.stringify(todos));
};

export { loadTodos, saveTodos };
