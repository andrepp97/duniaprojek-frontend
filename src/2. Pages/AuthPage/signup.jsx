import React, { Component } from 'react';
import { MDBInput, MDBBtn } from "mdbreact";

// IMPORT STYLE & IMAGES
import signupImg from '../../5. Assets/illustrations/people.svg';
import './style.css';

class Signup extends Component {
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
                                        <h3 className="h2-responsive signup-title">DAFTAR</h3>
                                        <div>
                                            <MDBInput outline label="Nama Lengkap" icon="user" />
                                            <MDBInput outline label="Email Anda" icon="envelope" type="email" />
                                            <MDBInput outline label="Password" icon="key" type="password" />
                                            <MDBInput outline label="Konfirmasi Password" icon="lock" type="password" />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <MDBBtn color="indigo" className="py-2 px-5">
                                                DAFTAR
                                            </MDBBtn>
                                        </div>
                                    </div>
                                </div>
                                {/* SIGNUP FORM */}

                                {/* SIGNUP ILLUSTRATION */}
                                <div className="col-lg-6">
                                    <div className="container-fluid illus pt-5">
                                        <img src={signupImg} alt="" className="img-fluid" />
                                    </div>
                                    <div className="container-fluid text-center mt-4">
                                        <span>
                                            Sudah Punya Akun ? &nbsp;
                                            <a href="/masuk" className="border shadow-sm rounded px-2 py-1">
                                                MASUK
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

export default Signup;