import React from "react";
import styled from 'styled-components'


const StyledFooter = styled.footer`
    flex: 0 1 40px;
    width: 100%;
    color: grey;
    text-align: center;
    background-color: #343a40;
    //shadow underneath Footer
    -webkit-box-shadow: 10px 10px 90px 12px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 90px 12px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 90px 12px rgba(0,0,0,0.75);
`


const StyledFooterText = styled.p`
    padding: 15px 1px 1px 1px;
      :hover {
    color: red;
    cursor: pointer;
  }
`


const HFooter = (props) => {
    return (
        <StyledFooter>
            <StyledFooterText>
                Made by Adam, Basia, Janek 2019
            </StyledFooterText>
        </StyledFooter>
    );
}

export default HFooter;