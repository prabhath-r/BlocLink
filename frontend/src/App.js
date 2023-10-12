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

export default App;
