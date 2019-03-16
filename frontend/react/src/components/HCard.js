import React from 'react';
import styled from 'styled-components'


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

const HCard = (props) => {
    return (
        <StyledCardContainer className="col-3 my-4 border-secondary">
            <StyledCard className="card h-100 rounded">
                <img className="card-img-top" src={props.host + props.category.image}
                     alt=""/>
                <StyledCardBody className="card-body">
                    <h3 className="card-title text-center">{props.category.name}</h3>
                    <hr/>
                    <p className="card-text text-wrap text-secondary center font-italic"> {props.category.summary} </p>
                </StyledCardBody>
            </StyledCard>
        </StyledCardContainer>
    );
};

export default HCard;