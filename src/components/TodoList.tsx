import Todo from "./Todo";
import { todoListProps } from "../types/propsType";

const TodoList: React.FC<todoListProps> = ({ todoListData }) => {
  return (
    <div>
      {todoListData.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
