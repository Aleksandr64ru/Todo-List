import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: number;
    text: string;
}

interface TodoState {
    todos: Todo[];
}

const loadTodos = (): Todo[] => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
};

const initialState: TodoState = {
    todos: loadTodos(),
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
            };
            state.todos.push(newTodo);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        clearTodos: (state) => {
            state.todos = [];
            localStorage.removeItem('todos');
        },
    },
});

export const { addTodo, removeTodo, clearTodos } = todoSlice.actions;
export default todoSlice.reducer;
