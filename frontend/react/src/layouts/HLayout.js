import React from 'react';
import HNavbar from "../components/HNavbar";
import HFooter from "../components/HFooter";
import styled from 'styled-components'



// const HOuterContainerStyles = {
//
//     minHeight: '100vh',
//     : 'block',
//     position: 'relative',
//     paddingBottom: '100px', /* height of your footer */
//     height: '100%',
//     background: 'whitesmoke'
// }

const StyledOuterContainer = styled.div`
    min-height: 100vh;
    height: auto !important;
    margin: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const StyledInnerContainer =  styled.div`
    min-height: 100vh;
    flex: 1 1 auto;
`;

const HLayout = (props) => {
    return (
        <StyledOuterContainer id={"OuterContainer"}>
            <HNavbar{...props}/>
            <StyledInnerContainer id={"InnerContainer"}>
                {props.children}
                </StyledInnerContainer>
            <HFooter/>
        </StyledOuterContainer>
    );
}

export default HLayout;


