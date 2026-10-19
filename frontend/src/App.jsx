import { useState } from 'react';
import React from 'react';
import Signup from './Signup';
import Login from './Login';
import './App.css';

export default function App() {
    const [isLoginView, setIsLoginView] = useState(true);

    return (
        <div className="container">
            <h1>CS418Y PA2 - Full-Stack Auth</h1>
            <div className="nav-buttons">
                <button className={isLoginView ? 'active' : ''} onClick={() => setIsLoginView(true)}>Switch to Login</button>
                <button className={!isLoginView ? 'active' : ''} onClick={() => setIsLoginView(false)}>Switch to Signup</button>
            </div>
            {isLoginView ? <Login /> : <Signup />}
        </div>
    );
}