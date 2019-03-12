import React from 'react';


const Category = (props) => {
    return (
        <ul>
            {props.categories.map(function(category){return <li> {category.name}</li>})
            }
        </ul>

    );
}

export default Category;