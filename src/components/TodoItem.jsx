import { useDispatch } from 'react-redux';
import { removeTodo } from 'store/todoSlice';
import { toggleTodoCompleted } from 'store/todoSlice';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoCompleted({ id }))}
      />
      <span className='spanText'>{text}</span>
      <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
