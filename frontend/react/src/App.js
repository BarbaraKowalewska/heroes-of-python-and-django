import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

import HLayout from './layouts/HLayout';
import BaseRouter from './BaseRouter';
import {BrowserRouter as Router} from 'react-router-dom';
import * as actions from './store/actions/auth';

class App extends Component {

    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        return (
            <div id="App" className="App">
                <Router>
                    <HLayout {...this.props}>
                        <BaseRouter/>
                    </HLayout>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);