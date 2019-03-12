import React from 'react';
import HNavbar from "../components/HNavbar";
import HFooter from "../components/HFooter";


const HOuterContainerStyles = {
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
    background: 'whitesmoke'
}


const HInnerContainerStyles = {
    background: '#fff',
    flex: '1 1 auto',

}

const HLayout = (props) => {
    return (
        <div id={"OuterContainer"} style={HOuterContainerStyles}>
            <HNavbar/>
            <div id={"HMainContainer"} style={HInnerContainerStyles}>
                {props.children}
            </div>
            <HFooter/>
        </div>
    );
}

export default HLayout;


