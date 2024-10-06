import React from "react";
import styled from "styled-components";

interface TodoProps {
    id: string;
    title: string;
    description: string;
    done: boolean;
    deadline: string;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TodoItem = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Todo: React.FC<TodoProps> = ({ id, title, description, done, deadline, onToggle, onDelete }) => {
    return (
        <TodoItem>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{deadline}</p>
            <button onClick={() => onToggle(id)}>{done ? "Undo" : "Done"}</button>
            <button onClick={() => onDelete(id)}>Delete</button>
        </TodoItem>
    );
};

export default Todo;
