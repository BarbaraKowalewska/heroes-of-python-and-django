import React from 'react';
import { Route } from 'react-router-dom';

import CategoryListView from './containers/CategoryListView';
import LandingPage from './views/LandingPage';

const BaseRouter = () => (

    <div>
        <Route exact path='/forum' component={CategoryListView}/>
        <Route exact path='/test' component={LandingPage}/>
    </div>

);

export default BaseRouter;