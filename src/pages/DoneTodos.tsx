import { Box } from "@mui/material";
import NavTabs from "../components/NavTabs";
import TodoList from "../components/TodoList";

const DoneTodos = () => {
	return (
		<Box>
			<NavTabs />
			<TodoList isDone={true} />
		</Box>
	);
};

export default DoneTodos;
