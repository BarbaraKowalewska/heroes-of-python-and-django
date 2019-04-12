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
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit(event) {
        console.log(this.state.email);
        console.log(this.state.password);
        this.props.onAuth(this.state.email, this.state.password);
        event.preventDefault();
    }

    callToggleFromChild() {
        this.props.toggle(this.props.loginFormModal);
    }

    closeAndLoadRegister() {
        this.callToggleFromChild();
        this.props.toggle(this.props.registerFormModal);
    }

    render() {

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
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
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HLoginForm);


// export default HLoginForm;