import React from 'react';

interface HeaderProps {
    onAddTodo: () => void;
    onClearTodos: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddTodo, onClearTodos }) => {
    return (
        <header className="header">
            <button className="add-button" onClick={onAddTodo}>
                Добавить
            </button>
            <h2>Пополните список...</h2>
            <button className="clear-button" onClick={onClearTodos}>
                Очистить
            </button>
        </header>
    );
};

export default Header;
