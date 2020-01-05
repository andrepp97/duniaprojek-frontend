import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand,
    MDBNavbarNav, MDBNavLink,
    MDBNavbarToggler, MDBCollapse,
    MDBBtn, MDBIcon
} from "mdbreact";
import './style.css'

class Navbar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBNavbar
                className='px-5 bg-navbar'
                expand="lg" fixed="top"
                light scrolling
            >
                <MDBNavbarBrand>
                    <Link to='/' className="text-white">
                        <strong>DUNIAPROJEK</strong>
                    </Link>
                </MDBNavbarBrand>

                <MDBNavbarToggler onClick={this.toggleCollapse} />

                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right>
                    <div className="float-right">
                        <div className="row text-white">
                            <div className="col-lg-12 text-center">
                                <span>KONTAK LANGSUNG : </span>
                                <span className="ml-3">
                                    <MDBIcon icon="phone-alt" className="mr-1" />
                                    +021-50169211 <span className="mx-3">|</span> contact@nextin.id
                                </span>
                            </div>
                        </div>
                        <div className="row border-top mt-1">
                            <div className="col-lg-12 nav-menu-container">
                                <MDBNavLink to='/' className="nav-menu text-white">CARA KERJA</MDBNavLink>
                                <MDBNavLink to='/' className="nav-menu text-white">PRICING</MDBNavLink>
                                <MDBNavLink to='/' className="nav-menu text-white">FAQ</MDBNavLink>
                                <MDBNavLink to='/' className="nav-menu text-white">AFILIASI</MDBNavLink>
                                <MDBNavLink to='/' className="nav-menu text-white">TENTANG KAMI</MDBNavLink>
                                <MDBNavLink to='/' className="nav-menu text-white">KONTAK</MDBNavLink>
                            </div>
                        </div>
                    </div>
                    </MDBNavbarNav>

                    <MDBNavbarNav right className="nav-btn-container">
                        <MDBBtn outline color='white' className='px-3 py-1 rounded-pill'>
                            Daftar
                        </MDBBtn>
                        <MDBBtn color='elegant' className='px-3 py-1 rounded-pill'>
                            Masuk
                        </MDBBtn>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default Navbar;