import { createContext, useState, ReactNode, useEffect } from "react";
import { TodoType } from "../types/TodoType";
import { loadTodos, saveTodos } from "../utils/localstorage";

// コンテキストの型定義
interface TodoListDataContextType {
	todos: TodoType[]; //Todの配列
	setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>; //Todを更新する関数
}

// 初期値を設定してコンテキストを作成
const TodoListDataContext = createContext<TodoListDataContextType | undefined>(undefined);

// プロバイダーコンポーネントの定義
export const TodoListDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	// ローカルストレージからTodoを読み込み、状態として設定
	const [todos, setTodos] = useState<TodoType[]>(() => loadTodos());

	// 変更されるたびにローカルストレージに保存
	useEffect(() => {
		saveTodos(todos);
	}, [todos]);

	return (
		// コンテキストプロバイダーを使用して、子コンポーネントにtodosとsetTodosを提供
		<TodoListDataContext.Provider value={{ todos, setTodos }}>
			{children}
		</TodoListDataContext.Provider>
	);
};

export default TodoListDataContext;
