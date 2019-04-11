import React from "react";
import {MDBBtn, MDBInput, MDBModal} from 'mdbreact';

class HLoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.callToggleFromChild = this.callToggleFromChild.bind(this);
    }

    callToggleFromChild(){
        this.props.toggle(this.props.loginFormModal);
    }

    closeAndLoadRegister(){
        this.callToggleFromChild();
        this.props.toggle(this.props.registerFormModal);
    }

    render() {
        return (

            <MDBModal toggle={this.callToggleFromChild} isOpen={this.props.isOpen} centered>
                <div onClick={(e) => this.callToggleFromChild()} className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">Log in</h4>
                    <button type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="modal-body mx-3">
                    <div className="grey-text">
                        <MDBInput
                            label="Type your email"
                            icon="envelope"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                        />

                        <MDBInput
                            label="Type your password"
                            icon="lock"
                            group
                            type="password"
                            validate
                        />
                    </div>
                </div>

                <div style={{display: 'grid'}} className="modal-footer justify-content-center">
                    <MDBBtn className="">Login</MDBBtn>
                    <p className="text-muted small mb-0">
                        Don't have an account?
                        <a href="#!" onClick={(e) => this.closeAndLoadRegister()} className="dark-grey-text font-weight-bold ml-1">
                            Register
                        </a>
                    </p>
                </div>
            </MDBModal>
        );
    }
}

export default HLoginForm;