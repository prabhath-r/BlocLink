import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'frontend/src/views/Home';

/**
 * Main Application Component with Routing.
 * 
 * set up the main routing for the application using Router. * 
 * TODO:
 * - changed chats and contacts, so gotta set up routes for them
 * - change the context to manage user data and app state.
 */
function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} /> 
                </Switch>
            </div>
        </Router>
    );
}

export default App;
