import React from 'react';
import './HCategoryTopic.css'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp, faEdit, faMapPin, faStar, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {withRouter} from "react-router-dom";


const StyledChevronIconContainer = styled.div`
    display: inline-table;
    position: relative;
    top: 10px;
`;


class HCategoryTopic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            host: process.env.REACT_APP_API_HOST,
        };
    }

    /**
     * Sends a delete request with certain topic and after that loads updated topics
     * @param  {id} id of topic to be removed
     * @param  {matchUrl} url path from the current location
     * in this case '/forum/categories/Forum/topics'
     */
    deleteTopic = (id, matchUrl) => {
        let endpoint = new URL(`/api${matchUrl}/${id}`, this.state.host);
        let status = fetch(endpoint, {
            method: 'delete'
        }).then(response => response.status)
            .then(status => {
                if (status === 204) {
                    this.props.loadTopics()
                }
            });
        return status;
    };


    render() {

        const {
            match,
            topic: {
                id,
                account,
                user,
                title,
                content,
                post_count,
                creation_date,
            }
        } = this.props;

        return (<div className="row">
            <div className="col-md-2 box">
                <aside>
                    <img id="userProfilePic" src={this.state.host + account.image}
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
                    <FontAwesomeIcon onClick={(e) => this.deleteTopic(id, match.url)} className="m-2 icon"
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


export default withRouter(HCategoryTopic);
