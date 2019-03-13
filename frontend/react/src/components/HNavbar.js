import React from 'react';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem,
    UncontrolledDropdown
} from 'reactstrap';
import styled from "styled-components";


const HNavbarStyles = {
    padding: '10px 10px',
    flex: '0 1 auto'
}

const StyledNameText = styled.p`
    color: whitesmoke;
    font-size: 24px;
    padding: 0 0 0 0;
    margin: auto;
    margin-left: 10px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      :hover {
    color: red;
    cursor: pointer;
`

const DropdownToggleStyle = {
    color: 'whitesmoke',
    fontSize: '24px',
    padding: '0 0 0 0',
    margin: 'auto',
    marginLeft: '10px',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
}

class HNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar style={HNavbarStyles} color="dark" dark sticky expand="md">
                    <StyledNameText href="/">Heroes of Python & Django</StyledNameText>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <StyledNameText href="/components/">Log In</StyledNameText>
                            </NavItem>
                            <NavItem>
                                <StyledNameText href="https://github.com/reactstrap/reactstrap">Register</StyledNameText>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle style={DropdownToggleStyle} nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default HNavbar