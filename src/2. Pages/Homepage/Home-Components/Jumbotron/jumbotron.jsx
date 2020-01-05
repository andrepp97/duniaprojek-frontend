import React from "react";
import { MDBBtn } from "mdbreact";

// STYLES & IMAGES
import './style.css'
import Working from '../../../../5. Assets/illustrations/working.svg'
// STYLES & IMAGES

const JumbotronPage = () => {
    return (
        <div className="jumbotron-container">
            <div className="row">
                <div className="col-md-4 offset-md-1">
                    <img src={Working} className="img-fluid p-5" alt="Working"/>
                </div>
                <div className="col-md-6 text-container">
                    <h1 className='h1-responsive jumbotron-text'>
                        Temukan / Buat Jasa Yang Sesuai
                        <br />
                        Dengan Kebutuhan / Keahlianmu
                    </h1>
                    <div className="btn-container">
                        <MDBBtn color="blue" className="rounded">Buat Jasa</MDBBtn>
                        <MDBBtn color="success" className="rounded">Cari Jasa</MDBBtn>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default JumbotronPage;