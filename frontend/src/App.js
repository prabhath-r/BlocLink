/**
 * Main Application Component.
 * 
 * This component sets up the main routing for the application. 
 * Each path corresponds to a different view, allowing users to navigate 
 * between different sections of the application.
 * 
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Messages from './views/Messages';
import Settings from './views/Settings';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/messages" component={Messages} />
                    <Route path="/settings" component={Settings} />
                </Switch>
            </div>
        </Router>
    );
}
/**
* TODO: 
* - Implement authentication and protected routes.
* - Add global state management (e.g., Redux or Context API).
 */

export default App;
