import React from "react";
import { TodoType } from "../types/TodoType";

interface TodoProps extends TodoType {
	onToggle: (id: string) => void;
}
const Todo: React.FC<TodoProps> = ({ id, title, description, deadline, done, onToggle }) => {
	return (
		<div>
			<b>
				<p>
					{title}
					<button onClick={() => onToggle(id)}>Done</button>
				</p>
			</b>
			<p>{description}</p>
			<p>{deadline}</p>
			<p>{done ? "Done" : "Not Done"}</p>
		</div>
	);
};
export default Todo;
