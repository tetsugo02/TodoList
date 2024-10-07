import { Link } from "react-router-dom";

import TodoList from "../components/TodoList";
import NavTabs from "../components/Navibar";
const Home = () => {
	return (
		<>
			<NavTabs />
			<TodoList isDone={false} />
			<TodoList isDone={true} />
			<Link to="/add">Add New Todo</Link>
		</>
	);
};

export default Home;
