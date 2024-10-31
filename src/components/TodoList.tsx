import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, clearTodos } from '../features/todoSlice';
import '../styles/TodoList.css';
import Header from './Header';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const todos: Todo[] = useSelector((state: any) => state.todos.todos);


    const handleAddTodo = () => {
        if (inputValue.trim()) {
            dispatch(addTodo(inputValue));
            setInputValue('');
        }
    };

    const handleRemoveTodo = (id: number) => {
        dispatch(removeTodo(id));
    };

    const handleClearTodos = () => {
        dispatch(clearTodos());
    };

    return (
        <div className="todo-container">
            <Header onAddTodo={handleAddTodo} onClearTodos={handleClearTodos} />
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Введите задачу"
                    className="todo-input"
                />
            </div>

            <ul className="todo-list">
                {todos.map((todo: Todo) => (
                    <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                        {todo.text}
                        <div className="icons-container">
                            <button className="remove-button" onClick={() => handleRemoveTodo(todo.id)}>🗑️</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
