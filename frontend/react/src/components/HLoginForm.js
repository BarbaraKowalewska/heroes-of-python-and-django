import React from "react";
import {MDBBtn, MDBInput, MDBModal} from 'mdbreact';
import './HLoginForm.css'
import {connect} from 'react-redux';
import * as actions from '../store/actions/auth';


class HLoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.callToggleFromChild = this.callToggleFromChild.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: "",
            password: ""
        };
        this.closeOnSuccessfulLogin = this.closeOnSuccessfulLogin.bind(this);
        this.callToggleFromChild = this.callToggleFromChild.bind(this);
        this.clearState = this.clearState.bind(this);
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit(event) {
        this.props.onAuth(this.state.email, this.state.password, this.closeOnSuccessfulLogin);
        event.preventDefault();
    }

    callToggleFromChild() {
        this.props.toggle(this.props.loginFormModal);
    }

    clearState() {
        this.setState({email: "", password: ""})
    }

    closeOnSuccessfulLogin() {
        this.callToggleFromChild();
        this.clearState();
    }

    closeAndLoadRegister() {
        this.callToggleFromChild();
        this.props.toggle(this.props.registerFormModal);
    }

    generateErrorArray(errorMessage) {
        if (typeof this.props.error !== 'string') {
            errorMessage = [];
            this.props.error.forEach((err) => {
                errorMessage.push(<p className="text-center font-weight-bolder">{err}</p>)
            })
        } else {
            errorMessage = <p className="text-center font-weight-bolder">{this.props.error}</p>
        }
        return errorMessage;
    }

    render() {

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = this.generateErrorArray(errorMessage);
        }

        return (
            <div id="modaltest">

                <MDBModal toggle={this.callToggleFromChild} isOpen={this.props.isOpen} centered>

                    <div onClick={(e) => this.callToggleFromChild()} className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-bold">Log in</h4>
                        <button type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div>


                        <form onSubmit={this.handleSubmit}>

                            <div className="modal-body mx-3">
                                {errorMessage}

                                {
                                    this.props.loading ?
                                        <div style={{marginLeft: '50%'}} className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                        :
                                        <div className="grey-text">

                                            <MDBInput
                                                label="Type your email"
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                                name="email"
                                                value={this.state.email}
                                                onInput={this.handleInput}
                                            />

                                            <MDBInput
                                                label="Type your password"
                                                icon="lock"
                                                group
                                                type="password"
                                                validate
                                                name="password"
                                                value={this.state.password}
                                                onInput={this.handleInput}
                                            />
                                        </div>
                                }
                            </div>

                            <div style={{display: 'grid'}} className="modal-footer justify-content-center">
                                <MDBBtn type="submit">Login</MDBBtn>
                                <p className="text-muted small mb-0">
                                    Don't have an account?
                                    <a href="#!" onClick={(e) => this.closeAndLoadRegister()}
                                       className="dark-grey-text font-weight-bold ml-1">
                                        Register
                                    </a>
                                </p>
                            </div>
                        </form>

                    </div>

                </MDBModal>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, closeModal) => dispatch(actions.authLogin(email, password, closeModal))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HLoginForm);
