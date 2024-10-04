import { createContext } from "react";
import { TodoType } from "../types/TodoType";

const TodoListDataContext = createContext<TodoType[]>([]);

export default TodoListDataContext;
