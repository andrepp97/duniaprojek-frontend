import React, {useState} from 'react';
import Select from 'react-select';
import NumberFormat from 'react-number-format';
import { MDBBtn } from 'mdbreact';
import './style.css';

const bidang = [
    { label: "IT", value: 1 },
    { label: "Non-IT", value: 2 }
]

const jasa = [
    { label: "Data Entry", value: 1 },
    { label: "Graphic Design", value: 2 },
    { label: "Motion Design", value: 3 },
    { label: "Web Development", value: 4 }
]

const lokasi = [
    { label: "Bandung", value: 1 },
    { label: "Jakarta", value: 2 },
    { label: "Surabaya", value: 3 },
    { label: "Tangerang", value: 4 },
    { label: "Tangerang Selatan", value: 5 }
]

// MAIN RENDER
const CariJasa = () => {

    // HOOKS
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000000);

    return (
        <div id="cari-jasa" className="cari-jasa-container">
            <h2 className="cari-jasa-title h2-responsive">CARI JASA DI DUNIAPROJEK</h2>
            <div className="cari-jasa-card bg-duniaprojek">
                
                {/* ROW 1 */}
                <div className="row">
                    {/* SELECT BIDANG JASA */}
                    <div className="col-lg-4 my-3 ">
                        <label className="text-white">Bidang Jasa</label>
                        <Select options={bidang} />
                    </div>
                    {/* SELECT BIDANG JASA */}

                    {/* SELECT JASA */}
                    <div className="col-lg-4 my-3 ">
                        <label className="text-white">Jasa</label>
                        <Select options={jasa} />
                    </div>
                    {/* SELECT JASA */}

                    {/* SELECT LOKASI */}
                    <div className="col-lg-4 my-3 ">
                        <label className="text-white">Lokasi</label>
                        <Select options={lokasi} />
                    </div>
                    {/* SELECT LOKASI */}
                </div>
                {/* ROW 1 */}

                {/* ROW 2 */}
                <div className="row">
                    {/* RANGE HARGA */}
                    <div className="col-lg-8 my-3 ">
                        <label className="text-white">Range Harga</label>
                        <div className="row">
                            <div className="col-lg-6 mt-2">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Min</span>
                                    </div>
                                    <NumberFormat
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(e.value)}
                                        thousandSeparator
                                        allowNegative={false}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Max</span>
                                    </div>
                                    <NumberFormat
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.value)}
                                        thousandSeparator
                                        allowNegative={false}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* RANGE HARGA */}

                    {/* SELECT LOKASI */}
                    <div className="col-lg-4 mt-4 pt-1">
                        <MDBBtn color="success" className="rounded btn-block">
                            CARI
                        </MDBBtn>
                    </div>
                    {/* SELECT LOKASI */}
                </div>
                {/* ROW 2 */}

            </div>
        </div>
    );
};

export default CariJasa;