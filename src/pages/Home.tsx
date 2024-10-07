import NavTabs from "../components/NavTabs";
import AddButton from "../components/AddButton";
import TodoList from "../components/TodoList";
import styled from "styled-components";

const Container = styled.div`
	position: relative;
	min-height: 100vh;
`;

const Home = () => {
	return (
		<Container>
			<NavTabs />
			<TodoList isDone={false} />
			<AddButton />
		</Container>
	);
};

export default Home;
