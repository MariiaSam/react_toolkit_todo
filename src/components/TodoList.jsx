import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, toggleTodoCompleted }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} removeTodo={removeTodo} toggleTodoCompleted={toggleTodoCompleted}/>
      ))}
    </ul>
  );
};

export default TodoList;
