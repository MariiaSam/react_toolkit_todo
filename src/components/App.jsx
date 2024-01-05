import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import TodoList from './TodoList';
import InputField from './InputField';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: nanoid(),
          text,
          completed: false, // тсатус
        },
      ]);
      setText(''); // після  додавання тудушки, кидається текст на пустий рядок
    }
  };
  const toggleTodoCompleted = todoId => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== todoId) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  const removeTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId)); //ідентифікатор не дорівнює, що ми отримуєм у ф-ції
  };

  return (
    <div className="App">
      <InputField text={text} handlerInput={setText} handlerSubmit={addTodo}/>
      <TodoList
        todos={todos}
        toggleTodoCompleted={toggleTodoCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
};
