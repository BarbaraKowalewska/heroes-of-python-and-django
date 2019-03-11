import React from 'react';
import { Route } from 'react-router-dom';

import CategoryListView from './containers/CategoryListView';

const BaseRouter = () => (

    <div>
        <Route exact path='/forum' component={CategoryListView}/>
    </div>

);

export default BaseRouter;