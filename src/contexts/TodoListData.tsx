import { createContext, useState, ReactNode } from "react";
import { TodoType } from "../types/TodoType";
import { TodoListdata } from "../tmp";

interface TodoListDataContextType {
	todos: TodoType[];
	setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

// 初期値を設定してコンテキストを作成
const TodoListDataContext = createContext<TodoListDataContextType | undefined>(undefined);

// プロバイダーコンポーネントの定義
export const TodoListDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [todos, setTodos] = useState<TodoType[]>(TodoListdata);
	return (
		<TodoListDataContext.Provider value={{ todos, setTodos }}>
			{children}
		</TodoListDataContext.Provider>
	);
};

export default TodoListDataContext;
