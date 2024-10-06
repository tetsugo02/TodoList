import { createContext, useState, ReactNode, useEffect } from "react";
import { TodoType } from "../types/TodoType";
import { loadTodos, saveTodos } from "../utils/localstorage";

interface TodoListDataContextType {
	todos: TodoType[];
	setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

// 初期値を設定してコンテキストを作成
const TodoListDataContext = createContext<TodoListDataContextType | undefined>(undefined);

// プロバイダーコンポーネントの定義
export const TodoListDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [todos, setTodos] = useState<TodoType[]>(loadTodos);

	useEffect(() => {
		saveTodos(todos);
	}, [todos]);

	return (
		<TodoListDataContext.Provider value={{ todos, setTodos }}>
			{children}
		</TodoListDataContext.Provider>
	);
};

export default TodoListDataContext;
