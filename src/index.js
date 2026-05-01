import React from 'react'
import App from './App'
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { AuthProvider } from './firebase/AuthContext';
import { ThemeProvider } from './firebase/ThemeContext';

ReactDOM.render(
    <Router>
        <AuthProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </AuthProvider>
    </Router>,
    document.getElementById("root"));