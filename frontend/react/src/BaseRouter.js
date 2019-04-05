import {Redirect, Route, Switch} from "react-router-dom";
import React from 'react';
import HLandingPage from "./fullSiteComponents/HLandingPage";
import HCategoryPage from "./fullSiteComponents/HCategoryPage";
import HCategoryTopics from "./fullSiteComponents/HCategoryTopics";

const BaseRouter = () => (

    <div>
        <Switch>

            <Route exact path='/' component={HLandingPage}/>

            <Route exact strict path='/forum/categories' component={HCategoryPage}/>

            <Route exact strict path='/forum/categories/:categoryName/topics' component={HCategoryTopics}/>

            <Route path='/' render={(sth) => {
                let urlx = sth.location.pathname;
                console.log(urlx.slice(0, -1))
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