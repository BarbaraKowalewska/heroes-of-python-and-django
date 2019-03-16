import React from 'react';
import { Route } from 'react-router-dom';

import HCategoryListView from './containers/HCategoryListView';
import HLandingPage from './fullSiteComponents/HLandingPage';
import HCategoryTopicsView from "./containers/HCategoryTopicsView";

const BaseRouter = () => (

    <div>
        <Route exact path='/' component={HLandingPage}/>
        <Route exact path='/forum' component={HCategoryListView}/>
        <Route exact path='/forum/:categoryName' component={HCategoryTopicsView}/>

    </div>

);

export default BaseRouter;