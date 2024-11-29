import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TodoList from './TodoList';
import Login from './Login';


const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const saved = localStorage.getItem('isLoggedIn');
        return saved === 'true';
    });

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };


    return (
        <Router>
            <Routes>
                <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
                <Route path="/" element={isLoggedIn ? (
                    <>
                        <button onClick={handleLogout}>Выйти</button>
                        
                        <TodoList />
                    </>
                ) : (
                    <Navigate to="/login" />
                )} />
            </Routes>
        </Router>
    );
};

export default App;
