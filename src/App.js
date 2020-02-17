import React, { Component } from 'react';
import { 
    Route, 
    Switch,
    Link,
    BrowserRouter as Router, 
} from 'react-router-dom';
import List from './List';
import Home from './Home';
import About from './About.js';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link className= "link-space" to="/">Home</Link>
                    <Link to="/about/a">About Me</Link>
                    <Switch>
                        <Route exact path="/:pokemon?" component={Home} />  
                        <Route exact path="/about/a" component={About} />
                        <Route exact path="/characters/:pokemonId" component={List} />
                    </Switch>
                </div>
            </Router>
      );
    }
}


