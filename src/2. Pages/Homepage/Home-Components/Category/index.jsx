import React from 'react';
import './style.css';

const category1 = ['Asuransi', 'Cleaning Service', 'Data Entry', 'Event Organizer', 'Graphic Design', 'Interior Design', 'Service AC', 'Video Editing']
const category2 = ['Data Science', 'Digital Marketing', 'IoT Development', 'Machine Learning', 'Mobile App Development', 'UI/UX Design', 'Web Design', 'Web Development']

const renderCategory1 = () => {
    return category1.map((val,idx) => {
        return (
            <div
                key={idx}
                className="card category-card"
            >
                <h6 className="text-center">{val}</h6>
            </div>
        )
    })
}

const renderCategory2 = () => {
    return category2.map((val, idx) => {
        return (
            <div
                key={idx}
                className="card category-card"
            >
                <h6 className="text-center">{val}</h6>
            </div>
        )
    })
}

const Category = () => {
    return (
        <div className="category-container">
            <h2 className="h2-responsive category-title">KATEGORI POPULER</h2>

            {/* NON-IT CATEGORY */}
            <div className="row">
                <div className="col-xl-4 my-2">
                    <div className="card shadow my-2">
                        <div className="card-body">
                            <h1 className="h1-responsive text-center">GAMBAR</h1>
                        </div>
                        <div className="card-footer deep-purple text-center">
                            <span className="text-white">NON-IT</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 my-2">
                    <div className="row category-row">
                        {renderCategory1()}
                    </div>
                </div>
            </div>
            {/* NON-IT CATEGORY */}

            <div className="my-3">&nbsp;</div>

            {/* IT CATEGORY */}
            <div className="row flex-row-reverse">
                <div className="col-xl-4 my-2">
                    <div className="card shadow my-2">
                        <div className="card-body">
                            <h1 className="h1-responsive text-center">GAMBAR</h1>
                        </div>
                        <div className="card-footer deep-purple text-center">
                            <span className="text-white">INFORMASI & TEKNOLOGI</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 my-2">
                    <div className="row category-row">
                        {renderCategory2()}
                    </div>
                </div>
            </div>
            {/* IT CATEGORY */}

        </div>
    );
};

export default Category;