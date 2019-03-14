import React from 'react';


const CategoryTopic = (props) => {
    return (
        <li className="media">
            <img className="mr-3" src={'http://localhost:8000' + props.topic.image}
                 alt="Generic placeholder image"/>
                <div className="media-body">
                    <h5 className="mt-0 mb-1"> {props.topic.title} </h5>
                    <hr/>
                    {props.topic.content}
                </div>
        </li>
    );
}

export default CategoryTopic;