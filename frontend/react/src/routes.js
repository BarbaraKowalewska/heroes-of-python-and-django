import {Route, Redirect} from "react-router-dom";
import HLandingPage from "./fullSiteComponents/HLandingPage";
import HCategoryPage from "./fullSiteComponents/HCategoryPage";
import HCategoryTopics from "./fullSiteComponents/HCategoryTopics";
import React from "react";



const LandingPage = () => (
    <Route exact strict path='/' component={HLandingPage}/>
);

const ForumCategoriesPage = () => (
    <Route exact path='/forum/categories' component={HCategoryPage}/>
);

const ForumTopicsOfCategoryPage = () => (
    <Route exact strict path='/forum/categories/:categoryName/topics' component={HCategoryTopics}/>
);

const CatchInvalidUrls = () => (
    <Route path='/' render={(sth) => {
        let urlx = sth.location.pathname;
        console.log(urlx.slice(0,-1))
        if (urlx.slice(-1) === '/') {
            return <Redirect to={urlx.slice(0,-1)} />
        } else {
            return <Redirect to='/' />
        }
      }
    }/>
);

export {LandingPage, ForumCategoriesPage, ForumTopicsOfCategoryPage, CatchInvalidUrls}