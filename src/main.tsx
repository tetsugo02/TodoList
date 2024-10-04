import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodoListdata } from "./tmp.tsx";
import App from "./App";
import TodoListDataContext from "./contexts/TodoListData.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<TodoListDataContext.Provider value={TodoListdata}>
			<App />
		</TodoListDataContext.Provider>
	</StrictMode>
);
