import { createSlice, nanoid } from "@reduxjs/toolkit";


const todoSlice = createSlice({ 
    name: 'todos', 
    initialState: { 
            todos: []
    },

    reducers: {
        addTodo (state, action){
                console.log(state)
                console.log(action)

            state.todos.push({
            id: nanoid(),
            text: action.payload.text,
            completed: false
            })
        },

        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },

        toggleTodoCompleted(state, action) {
        }
    }
})

export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions;


export default todoSlice.reducer