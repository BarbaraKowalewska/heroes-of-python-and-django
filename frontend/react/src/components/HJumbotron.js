import React from 'react';
import styled from 'styled-components'


const StyledJumbotron = styled.div`
    background-image: url('https://4.bp.blogspot.com/-nNxeWQ6DRto/V1n_j_mWO1I/AAAAAAAAGnY/5Ke4uV3BfnoAbZdz6XFICSKcJgk5XS1PwCLcB/s1600/wyverns%2Btail%2Bcoast%2Bfor%2BSoD.png');
    text-align: center;
`;


const LandingPageOverlay = styled.div`
    padding: 1% 1%;
    heigth: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.7);
    //shadow underneath Jumbotron
    -webkit-box-shadow: 10px 10px 90px 12px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 90px 12px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 90px 12px rgba(0,0,0,0.75);
`;


const HopadMainName = styled.h1`
  color: whitesmoke;
  word-wrap: break-word;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.2; 
  font-size: 100px; 
  font-style: normal; 
  font-variant: normal; 
  font-weight: 300; 
  :hover {
    color: red;
    cursor: pointer;
  }
`;


const HJumbotron = (props) => {
    return (
        <StyledJumbotron className="jumbotron-fluid">
            <LandingPageOverlay>
                <HopadMainName>
                    Heroes of Python & Django
                    {/* Emojis in span below ;) */}
                    <br/>
                    <span aria-label="EMOJIS" role={"img"}>👹🐲👺</span>
                </HopadMainName>
            </LandingPageOverlay>
        </StyledJumbotron>
    );
};

export default HJumbotron;