import Todo from "./Todo"; //コンポーネントをインポート
import { useContext } from "react"; // Reactのフックをインポート
import TodoListDataContext from "../contexts/TodoListData";
import styled from "styled-components"; // styled-componentsをインポート

//Listコンポーネントのプロパティの型定義
interface TodoListProps {
	isDone: boolean; // isDoneプロパティはTodoの完了状態を示す
}

// スタイルドコンポーネントとしてTodoListをラップ
const StyledTodoList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TodoList: React.FC<TodoListProps> = ({ isDone }) => {
	// useContextフックを使用してTodoListDataContextからデータを取得
	const context = useContext(TodoListDataContext);

	if (!context) {
		throw new Error("TodoList must be used within a TodoListDataProvider");
	}

	const { todos, setTodos } = context;

	//の完了状態を切り替える関数
	const onToggleDone = (id: string) => {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, done: !todo.done }; // doneプロパティを反転
				}
				return todo;
			});
		});
	};

	// Todoを削除する関数
	const onDeleteTodo = (id: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== id);
		});
	};

	return (
		<StyledTodoList>
			<h2>Todo List({isDone ? "done" : "WIP"})</h2> {/* タイトルを表示 */}
			{todos
				.filter((todo) => {
					return todo.done === isDone; // isDoneプロパティに基づいてフィルタリング
				})
				.map((todo) => (
					<Todo key={todo.id} {...todo} onToggle={onToggleDone} onDelete={onDeleteTodo} /> //コンポーネントをレンダリング
				))}
		</StyledTodoList>
	);
};

export default TodoList; //Listコンポーネントをエクスポート
