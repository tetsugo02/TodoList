import { createContext } from "react";
import { TodoListdata } from "../tmp";
import { TodoType } from "../types/TodoType";

const TodoListDataContext = createContext<TodoType[]>(TodoListdata);

export default TodoListDataContext;
