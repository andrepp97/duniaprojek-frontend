import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
    MDBNavbarToggler, MDBCollapse,
    MDBNavbar, MDBNavbarBrand,
    MDBNavbarNav, MDBNavLink,
    MDBBtn, MDBIcon,
    MDBDropdown, MDBDropdownMenu, MDBDropdownItem, MDBDropdownToggle, MDBNavItem
} from "mdbreact";

// IMPORT STYLE & IMAGES
import Logo from '../../5. Assets/icon-logo.jpeg'
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
                        <img src={Logo} alt="" height={50} />
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
                                <MDBNavItem className="nav-menu">
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <span className="mr-1 text-white">PROYEK</span>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem href="#!">Buat Proyek</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Cari Proyek</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Menjadi Freelancer</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">FAQ Freelancer</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Menjadi Klien</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">FAQ Klien</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Tentang Arbitrase</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                <MDBNavItem className="nav-menu">
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <span className="mr-1 text-white">PRODUK</span>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem href="#!">Cari Produk</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Jual Produk</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Menjadi Pembeli</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">FAQ Pembeli</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Menjadi Penjual</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">FAQ Penjual</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                <MDBNavItem className="nav-menu">
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <span className="mr-1 text-white">JASA</span>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem href="#!">Buat Jasa</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Cari Pengguna</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Jual Jasa</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">FAQ Jasa</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                <MDBNavLink to='/' className="nav-menu text-white">AFILIASI</MDBNavLink>
                            </div>
                        </div>
                    </div>
                    </MDBNavbarNav>

                    <MDBNavbarNav right className="nav-btn-container">
                        <MDBBtn outline color='white' className='px-3 py-1 rounded-pill' href="/daftar">
                            Daftar
                        </MDBBtn>
                        <MDBBtn outline color='elegant' className='px-3 py-1 rounded-pill' href="/masuk">
                            <span className="text-white">Masuk</span>
                        </MDBBtn>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default Navbar;