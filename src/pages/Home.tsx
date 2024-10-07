import TodoList from "../components/TodoList";
import NavTabs from "../components/NavTabs";
const Home = () => {
	return (
		<>
			<NavTabs />
			<TodoList isDone={false} />
		</>
	);
};

export default Home;
