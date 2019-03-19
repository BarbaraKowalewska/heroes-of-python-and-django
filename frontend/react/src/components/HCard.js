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
        this.state = {};
    }

    render() {
        return (
            <StyledCardContainer className={`col-md-${this.props.bootstrapGridValue} my-4 border-secondary`}>
                <StyledCard className="card h-100 rounded">
                    <img className="card-img-top" src={this.props.host + this.props.category.image}
                         alt=""/>
                    <StyledCardBody className="card-body">
                        <h3 className="card-title text-center">{this.props.category.name}</h3>

                        <Link to={`${this.props.match.url}/${this.props.category.name}/${this.props.urlCategory}`}>LIIIINKNKNKNKNK</Link>

                        <hr/>
                        <p className="card-text text-wrap text-secondary center font-italic"> {this.props.category.summary} </p>
                    </StyledCardBody>
                </StyledCard>
            </StyledCardContainer>
        );
    }
};

export default withRouter(HCard);