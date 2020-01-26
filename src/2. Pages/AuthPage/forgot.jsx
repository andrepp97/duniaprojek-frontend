import React, { Component } from 'react';
import { MDBInput, MDBBtn } from 'mdbreact';
import ForgotImg from '../../5. Assets/illustrations/forgot.svg';

class FogotPassword extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-container">

                    {/* FORGOT PASSWORD CARD */}
                    <div className="col-lg-8 offset-lg-2">
                        <div className="auth-card">
                            <div className="row">

                                {/* FORGOT PASSWORD FORM */}
                                <div className="col-lg-6">
                                    <div className="container-fluid">
                                        <h3 className="h2-responsive signup-title">LUPA PASSWORD</h3>
                                        <div>
                                            <MDBInput outline label="Email Anda" icon="envelope" type="email" />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <MDBBtn color="blue" className="py-2 px-5">
                                                Lupa Password
                                            </MDBBtn>
                                        </div>
                                    </div>
                                </div>
                                {/* FORGOT PASSWORD FORM */}

                                {/* FORGOT PASSWORD ILLUSTRATION */}
                                <div className="col-lg-6">
                                    <div className="container-fluid illus">
                                        <img src={ForgotImg} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                {/* FORGOT ILLUSTRATION */}

                            </div>
                        </div>
                    </div>
                    {/* FORGOT PASSWORD CARD */}

                </div>
            </div>
        );
    }
}

export default FogotPassword;