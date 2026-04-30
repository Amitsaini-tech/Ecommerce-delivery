import React from 'react'
import App from './App'
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { AuthProvider } from './firebase/AuthContext';

ReactDOM.render(
    <Router>
        <AuthProvider>
            <App />
        </AuthProvider>
    </Router>,
    document.getElementById("root"));