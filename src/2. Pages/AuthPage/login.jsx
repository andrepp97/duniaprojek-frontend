import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBInput, MDBBtn } from "mdbreact";

// IMPORT STYLE & IMAGES
import loginImg from '../../5. Assets/illustrations/sign_in.svg';
import './style.css';

class Login extends Component {
    render() {
        return (
            <div className="auth-wrapper">

                <div className="auth-container">

                    {/* SIGNUP CARD */}
                    <div className="col-lg-8 offset-lg-2">
                        <div className="auth-card">
                            <div className="row">

                                {/* SIGNUP FORM */}
                                <div className="col-lg-6">
                                    <div className="container-fluid">
                                        <h3 className="h2-responsive signup-title">MASUK</h3>
                                        <div>
                                            <MDBInput outline label="Email Anda" icon="envelope" type="email" />
                                            <MDBInput outline label="Password" icon="key" type="password" />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <MDBBtn color="blue" className="py-2 px-5">
                                                MASUK
                                            </MDBBtn>
                                        </div>
                                    </div>
                                    <div className="text-center mt-4">
                                        <Link to="/lupa-password" className="border shadow-sm px-2 py-1 text-danger">
                                            Lupa Password
                                        </Link>
                                    </div>
                                </div>
                                {/* SIGNUP FORM */}

                                {/* SIGNUP ILLUSTRATION */}
                                <div className="col-lg-6">
                                    <div className="container-fluid illus">
                                        <img src={loginImg} alt="" className="img-fluid" />
                                    </div>
                                    <div className="container-fluid text-center mt-5">
                                        <span>
                                            Baru di DUNIAPROJEK ? &nbsp;
                                            <a href="/daftar" className="border shadow-sm rounded px-2 py-1">
                                                DAFTAR
                                            </a>
                                        </span>
                                    </div>
                                </div>
                                {/* SIGNUP ILLUSTRATION */}

                            </div>
                        </div>
                    </div>
                    {/* SIGNUP CARD */}

                </div>

            </div>
        );
    }
}

export default Login;