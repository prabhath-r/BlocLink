import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';

/**
 * Main Application Component with Routing.
 * 
 * The App component sets up the main routing for the application using React Router.
 * The Home route ("/") will render the Home/Profile page.
 * 
 * TODO:
 * - Set up other routes (e.g., /chats, /contacts) as more components are developed.
 * - Implement a global state or context to manage user data and app state.
 */
function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} />
                    {/* Add other routes here as needed */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
