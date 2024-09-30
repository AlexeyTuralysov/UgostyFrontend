// Ваш компонент для входа, например Login.js

import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/token/', {
                username: username,
                password: password
            });
            localStorage.setItem('token', response.data.access);

            
            navigate('/' + username);
            
        } catch (error) {
            console.error('ошибка входа:', error);
        }
    };

    return (
        <div>
            <input type="text" placeholder="имя пользователя" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>войти</button>
        </div>
    );
};

export default Auth;
