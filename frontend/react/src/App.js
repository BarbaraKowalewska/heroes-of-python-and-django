import React, {Component} from 'react';
import './App.css';

import HLayout from './layouts/HLayout';
import BaseRouter from './routes';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div id="App" className="App">
                <Router>
                    <HLayout>
                        <BaseRouter/>
                    </HLayout>
                </Router>
            </div>
        );
    }
}

export default App;
