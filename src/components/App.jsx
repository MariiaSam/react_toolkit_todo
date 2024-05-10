import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/todoSlice';


import TodoList from './TodoList';
import InputField from './InputField';

import FormButton from './Button/FormButton';
import RadioFilters from './RadioButton/RadioFilters/RadioFilters';
import RadioColorCard from './RadioButton/RadioColor/RadioColorCard';

// import Calendar from './Calendar/Calendar';

import Calendar from '1/Calendar';

export function App () {
  const [text, setText] = useState(''); 
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  };


  
  // const removeTodo = todoId => {
  //   // setTodos(todos.filter(todo => todo.id !== todoId)); //ідентифікатор не дорівнює, що ми отримуєм у ф-ції
  // };

  return (
    <div className="App">
      <InputField text={text} handlerInput={setText} handlerSubmit={addTask} />
      <TodoList />

      <FormButton/>
      <RadioFilters></RadioFilters>
      <RadioColorCard></RadioColorCard>
      {/* <Calendar></Calendar> */}
      <Calendar></Calendar>
   


    </div>
  );
}

