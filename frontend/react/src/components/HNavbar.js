import React from 'react';
import styled from "styled-components";
import HLoginForm from "./HLoginForm";
import HRegisterForm from "./HRegisterForm";


const StyledNav = styled.nav`
    padding: 10px 10px;
    flex: 0 1 auto;
    background-color: #343a40;
    -webkit-box-shadow: 3px 3px 45px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 3px 45px 2px rgba(0,0,0,0.75);
    box-shadow: 3px 3px 45px 2px rgba(0,0,0,0.75);
`;


const StyledNavText = styled.a`
    color: whitesmoke;
    font-size: 24px;
    padding: 0 0 0 0;
    margin: auto;
    margin-left: 10px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      :hover {
    color: red;
    cursor: pointer;
    text-decoration: none;
`;


class HNavbar extends React.Component {

    state = {
        loginFormModal: "loginFormModal",
        loginFormModalOpen: false,
        registerFormModal: "registerFormModal",
        registerFormModalOpen: false
    };


    toggle = (name) => {
        this.setState({
            [name + "Open"]: !this.state[name + "Open"]
        });
    };


    render() {
        return (
            <StyledNav className="navbar navbar-expand-lg navbar-light">

                <HLoginForm isOpen={this.state.loginFormModalOpen}
                            toggle={this.toggle}
                            loginFormModal={this.state.loginFormModal}/>

                <HRegisterForm isOpen={this.state.registerFormModalOpen}
                               toggle={this.toggle}
                               loginFormModal={this.state.registerFormModal}/>

                <StyledNavText href="#">Heroes of Python & Django</StyledNavText>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNavDropdown" className="navbar-collapse collapse">
                    <ul className="navbar-nav mr-auto">
                    </ul>

                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <StyledNavText href="#" onClick={(e) => this.toggle(this.state.loginFormModal)}>
                                Login
                            </StyledNavText>
                        </li>

                        <li className="nav-item">
                            <StyledNavText href="#"
                                           onClick={(e) => this.toggle(this.state.registerFormModal)}>Register</StyledNavText>
                        </li>

                        <li className="nav-item dropdown">
                            <StyledNavText className="dropdown-toggle" href="http://example.com"
                                           id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                Stuff
                            </StyledNavText>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="https://www.google.com/">Sftuff1</a>
                                <a className="dropdown-item" href="https://www.google.com/">Stuff2</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </StyledNav>
        );
    }
}

export default HNavbar