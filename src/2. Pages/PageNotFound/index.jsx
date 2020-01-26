import React from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';
import emptyImg from '../../5. Assets/illustrations/empty.svg';

const PageNotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            
            <div className="row">
                <div className="col-lg-12">

                    <img src={emptyImg} alt="" height={275} />
                    
                    <br/>

                    <div className="text-center mt-4">
                        <h3 className="h3-responsive">Halaman Tidak Ditemukan</h3>
                        <MDBBtn color="elegant" className="px-3 py-2" href="/">
                            <MDBIcon icon="arrow-left" /> Kembali
                        </MDBBtn>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default PageNotFound;