import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import dayjs, { Dayjs } from "dayjs";
import styled from "styled-components";
import { Box, TextField, Button, FormControl, FormHelperText } from "@mui/material";

import { TodoType } from "../types/TodoType";
import TodoListDataContext from "../contexts/TodoListData";
import BasicDatePicker from "./TimePicker";

const StyledAddNewTodo = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const StyledTextField = styled(TextField)`
	width: 270px;
`;
const StyledButton = styled(Button)`
	width: 270px;
`;
const StyledBox = styled(Box)`
	margin: 10px;
`;

const AddNewTodo = () => {
	const todoContext = useContext(TodoListDataContext);
	if (!todoContext) {
		throw new Error("TodoListDataProvider must be used within a TodoListDataProvider");
	}
	const { todos, setTodos } = todoContext;

	const [newTodo, setNewTodo] = useState<TodoType>({
		id: "",
		title: "",
		description: "",
		done: false,
		deadline: "",
	});

	const [titleError, setTitleError] = useState<boolean>(false);

	const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNewTodo((prev) => ({
			...prev,
			[name]: value,
		}));
		if (name === "title") {
			setTitleError(value.trim() === "");
		}
	};

	const handleDateChange = (date: Dayjs | null) => {
		if (date) {
			setNewTodo((prev) => ({
				...prev,
				deadline: date.format("YYYY-MM-DD HH:mm"),
			}));
		}
	};

	const handleAddTodo = () => {
		const newTodoWithId: TodoType = {
			...newTodo,
			id: uuidv4(),
		};
		setTodos([...todos, newTodoWithId]);
		setNewTodo({
			id: "",
			title: "",
			description: "",
			done: false,
			deadline: "",
		});
		setTitleError(false);
	};

	return (
		<StyledAddNewTodo>
			<FormControl error={titleError}>
				<StyledTextField
					type="text"
					placeholder="Title"
					name="title"
					value={newTodo.title}
					required
					onChange={onHandleChange}
				/>
				{titleError && <FormHelperText>Title is required and cannot be empty</FormHelperText>}
			</FormControl>
			<div>
				<StyledTextField
					type="text"
					placeholder="Description"
					name="description"
					value={newTodo.description}
					onChange={onHandleChange}
					multiline
					rows={4}
				/>
			</div>
			<div>
				<BasicDatePicker value={dayjs(newTodo.deadline)} onChange={handleDateChange} />
			</div>
			<StyledBox>
				<StyledButton
					variant="contained"
					onClick={handleAddTodo}
					disabled={newTodo.title.trim() === ""}
				>
					Add
				</StyledButton>
			</StyledBox>
		</StyledAddNewTodo>
	);
};

export default AddNewTodo;
