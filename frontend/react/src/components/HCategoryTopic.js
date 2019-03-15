import React from 'react';
import './HCategoryTopic.css'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp, faEdit, faMapPin, faStar, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const StyledChevronIconContainer = styled.div`
    display: inline-table;
    position: relative;
    top: 10px;
`;


const CategoryTopic = (props) => {
    return (
        <div className="row">
            <div className="col-md-2 box">
                <aside>
                    <img id="userProfilePic" src={'http://localhost:8000' + props.topic.account.image}
                         className="img-responsive mr-3 mt-3 rounded-circle"
                         alt="test"/>
                    <h4 id="userName" className="mt-2 ml-2 hoverable"> {props.topic.user.username} </h4>
                    <small className="ml-2"> {props.topic.user.email} </small>
                </aside>
            </div>

            <div className="col-md-8 box">
                <article className="mt-3">
                    <header>
                        <StyledChevronIconContainer>
                            <FontAwesomeIcon className="d-block icon" icon={faChevronUp}/>
                            <FontAwesomeIcon className="icon" icon={faChevronDown}/>
                        </StyledChevronIconContainer>
                        <h2 className="d-inline hoverable"> {props.topic.title} </h2>

                    </header>
                    <div className="ml-5 lead"> {props.topic.content} </div>

                    <footer>
                        <hr/>
                        <small> Posts in this thread: {props.topic.post_count}</small>
                        <small>, {props.topic.creation_date} </small>
                    </footer>
                </article>
            </div>

            <div className="p-1 my-5 col-md-2 box">
                <div className="row">
                    <FontAwesomeIcon className="m-2 icon" icon={faTrashAlt}/>
                    <FontAwesomeIcon className="m-2 icon" icon={faEdit}/>
                </div>

                <div className="row">
                    <FontAwesomeIcon className="m-2 icon" icon={faStar}/>
                    <FontAwesomeIcon className="m-2 icon" icon={faMapPin}/>
                </div>

            </div>
        </div>


    );
}

export default CategoryTopic;
