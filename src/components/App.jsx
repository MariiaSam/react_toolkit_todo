import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/todoSlice';


import TodoList from './TodoList';
import InputField from './InputField';



export function App () {
  const [text, setText] = useState(''); 
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  };


  return (
    <div className="App">
      <InputField text={text} handlerInput={setText} handlerSubmit={addTask} />
      <TodoList />
   
    </div>
  );
}

