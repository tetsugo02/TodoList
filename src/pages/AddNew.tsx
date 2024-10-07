import { Box } from "@mui/material";
import AddNewTodo from "../components/AddNew";
import NavTabs from "../components/NavTabs";

const AddNew = () => {
	return (
		<Box>
			<NavTabs />
			<AddNewTodo />
		</Box>
	);
};

export default AddNew;
