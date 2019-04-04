import {Route} from "react-router-dom";
import HLandingPage from "./fullSiteComponents/HLandingPage";
import HCategoryPage from "./fullSiteComponents/HCategoryPage";
import HCategoryTopics from "./fullSiteComponents/HCategoryTopics";
import React from "react";


const LandingPage = () => (
    <Route exact path='/' component={HLandingPage}/>
);

const ForumCategoriesPage = () => (
    <Route exact path='/forum/categories' component={HCategoryPage}/>
);

const ForumTopicsOfCategoryPage = () => (
    <Route exact path='/forum/categories/:categoryName/topics' component={HCategoryTopics}/>
);

export {LandingPage, ForumCategoriesPage, ForumTopicsOfCategoryPage}