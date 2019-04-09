import {Redirect, Route, Switch} from "react-router-dom";
import React from 'react';
import HLandingPage from "./fullSiteComponents/HLandingPage";
import HCategoryPage from "./fullSiteComponents/HCategoryPage";
import HCategoryTopics from "./fullSiteComponents/HCategoryTopics";


import {routes} from './routes'


const BaseRouter = () => (

    <div>
        <Switch>

            <Route exact path={routes.LANDING_PAGE} component={HLandingPage}/>

            <Route exact strict path={routes.APPLICATION_PAGE} component={HCategoryPage}/>

            <Route exact strict path={routes.CATEGORY_PAGE} component={HCategoryTopics}/>

            <Route path='/' render={(sth) => {
                let urlx = sth.location.pathname;
                console.log(urlx.slice(0, -1));
                if (urlx.slice(-1) === '/') {
                    return <Redirect to={urlx.slice(0, -1)}/>
                } else {
                    return <Redirect to='/'/>
                }
            }
            }/>

        </Switch>
    </div>
);

export default BaseRouter;