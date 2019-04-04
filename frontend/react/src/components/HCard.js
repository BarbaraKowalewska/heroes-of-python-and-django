import React from 'react';
import styled from 'styled-components'
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";


const StyledCardContainer = styled.div`
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`;


const StyledCard = styled.div`
    margin-left: 10px;
    margin-right: 10px;
        :hover {
    position:relative;
    bottom: 2px;    
    -webkit-box-shadow: 0px 2px 50px 3px rgba(71,0,0,1);
    -moz-box-shadow: 0px 2px 50px 3px rgba(71,0,0,1);
    box-shadow: 0px 2px 50px 3px rgba(71,0,0,1);
`;


const StyledCardBody = styled.div`
    :hover {  
    cursor: pointer;
`;


class HCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            host: process.env.REACT_APP_API_HOST
        };
    }

    render() {

        const {
            host
        } = this.state

        const {
            bootstrapGridValue,
            match,
            urlCategory,
            category: {
                image,
                name,
                summary
            }
        } = this.props;

        return (
            <StyledCardContainer className={`col-md-${bootstrapGridValue} my-4 border-secondary`}>
                <StyledCard className="card h-100 rounded">
                    <img className="card-img-top" src={host + image}
                         alt=""/>
                    <StyledCardBody className="card-body">
                        <h3 className="card-title text-center">{name}</h3>
                        <Link
                            to={`${match.url}/${name}/${urlCategory}`}>LIIIINKNKNKNKNK
                        </Link>
                        <hr/>
                        <p className="card-text text-wrap text-secondary center font-italic"> {summary} </p>
                    </StyledCardBody>
                </StyledCard>
            </StyledCardContainer>
        );
    }
};

export default withRouter(HCard);