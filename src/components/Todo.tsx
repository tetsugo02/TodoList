import { Box, ListItemText, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import DropDownMenu from "./DropDownMenu";

interface TodoProps {
	id: string;
	title: string;
	description: string;
	done: boolean;
	deadline: string;
	onToggle: (id: string) => void;
	onDelete: (id: string) => void;
}

const TodoItem = styled(Box)`
	border: 1px solid #ccc;
	padding: 10px;
	margin: 10px;
	width: 300px;
	display: flex;
	flex-direction: column;
`;

const TodoHeader = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
`;

const Todo: React.FC<TodoProps> = ({
	id,
	title,
	description,
	done,
	deadline,
	onToggle,
	onDelete,
}) => {
	return (
		<TodoItem>
			<TodoHeader>
				<div>
					<ListItemText>{title}</ListItemText>
					<ListItemText>{description}</ListItemText>
					<ListItemText>{deadline}</ListItemText>
				</div>
				<div style={{ marginLeft: "auto" }}>
					<DropDownMenu onDelete={() => onDelete(id)} />
				</div>
			</TodoHeader>
			<Box display="flex" justifyContent="center" mt={2}>
				<Button
					onClick={() => onToggle(id)}
					color="secondary"
					variant="contained"
					style={{ width: "80px", marginRight: "10px" }}
				>
					{done ? "Undo" : "Done"}
				</Button>
			</Box>
		</TodoItem>
	);
};

export default Todo;
