import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./components/Home"
import CreateTask from "./components/CreateTask"
import EditTask from "./components/EditTask"
import Error from "./components/Error"
import NavbarComponent from "./components/NavbarComponent"
import DeleteTask from './components/DeleteTask';

function App() {
    return (
        <main>
            <NavbarComponent />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/create" component={CreateTask} />
                <Route path="/edit/:id" component={EditTask} />
                <Route path="/delete/:id" component={DeleteTask} />
                <Route component={Error} />
            </Switch>
        </main>
    )
}


export default App;