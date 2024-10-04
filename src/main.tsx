import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodoListDataProvider } from "./contexts/TodoListData";
import App from "./App";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<TodoListDataProvider>
			<App />
		</TodoListDataProvider>
	</StrictMode>
);
