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


class HCategoryTopic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    deleteTopic = (e) => {
        console.log(e);
    }


    render() {

        const {
            topic: {
                account,
                user,
                title,
                content,
                post_count,
                creation_date
            }
        } = this.props;

        return (<div className="row">
            <div className="col-md-2 box">
                <aside>
                    <img id="userProfilePic" src={'http://localhost:8000' + account.image}
                         className="img-responsive mr-3 mt-3 rounded-circle"
                         alt="test"/>
                    <h4 id="userName" className="mt-2 ml-2 hoverable"> {user.username} </h4>
                    <small className="ml-2"> {user.email} </small>
                </aside>
            </div>

            <div className="col-md-8 box">
                <article className="mt-3">
                    <header>
                        <StyledChevronIconContainer>
                            <FontAwesomeIcon className="d-block icon" icon={faChevronUp}/>
                            <FontAwesomeIcon className="icon" icon={faChevronDown}/>
                        </StyledChevronIconContainer>
                        <h2 className="d-inline hoverable"> {title} </h2>
                    </header>

                    <div className="ml-5 lead"> {content} </div>

                    <footer>
                        <hr/>
                        <small> Posts in this thread: {post_count}</small>
                        <small>, {creation_date} </small>
                    </footer>
                </article>
            </div>

            <div className="p-1 my-5 col-md-2 box">
                <div className="row">
                    <FontAwesomeIcon onClick={(e) => this.deleteTopic(this.props.topic.id, e)} className="m-2 icon"
                                     icon={faTrashAlt}/>
                    <FontAwesomeIcon className="m-2 icon" icon={faEdit}/>
                </div>

                <div className="row">
                    <FontAwesomeIcon className="m-2 icon" icon={faStar}/>
                    <FontAwesomeIcon className="m-2 icon" icon={faMapPin}/>
                </div>
            </div>
        </div>);
    }
}


export default HCategoryTopic;
