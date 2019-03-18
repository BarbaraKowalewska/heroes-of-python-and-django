import React from 'react';
import {ForumCategoriesPage, ForumTopicsOfCategoryPage, LandingPage} from "./routes";

const BaseRouter = () => (

    <div>
        <LandingPage/>
        <ForumCategoriesPage/>
        <ForumTopicsOfCategoryPage/>
    </div>
);

export default BaseRouter;