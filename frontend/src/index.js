import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * Entry point for the React application.
 * 
 * This file bootstraps the main App component and renders it into the root HTML element.
 * 
 * TODO:
 * - Consider adding service workers for offline capabilities.
 * - Implement any global context or state providers here.
 */
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
