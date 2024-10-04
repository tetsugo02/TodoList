import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { TodoListDataProvider } from "./contexts/TodoListData";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<TodoListDataProvider>
			<App />
		</TodoListDataProvider>
	</StrictMode>
);
