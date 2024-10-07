import { Box } from "@mui/material";
import NavTabs from "../components/NavTabs";
import TodoList from "../components/TodoList";
import AddButton from "../components/AddButton";

const DoneTodos = () => {
	return (
		<Box>
			<NavTabs />
			<TodoList isDone={true} />
			<AddButton />
		</Box>
	);
};

export default DoneTodos;
