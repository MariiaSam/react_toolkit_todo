import { useDispatch } from "react-redux";


const TodoItem = ({ id, text, completed, removeTodo, toggleTodoCompleted }) => {
  const dispatch = useDispatch()

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoCompleted(id)}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => dispatch()}>
  &times;
</span>
    </li>
  );
};


export default TodoItem