import React from "react";
import {MDBBtn, MDBInput,} from 'mdbreact';

class HLoginForm extends React.Component {
    render() {
        return (

            <div className="modal fade" id="modalLoginForm" tabIndex="-1" role="dialog"
                 aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content mx-5">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Log in</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                                <a href="#!" className="dark-grey-text font-weight-bold ml-1">
                                    Sign up
                                </a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default HLoginForm;