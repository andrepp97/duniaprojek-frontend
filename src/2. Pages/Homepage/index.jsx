import React, { Component } from 'react';

// IMPORT COMPONENTS
import Jumbotron from './Home-Components/Jumbotron';
import CariJasa from './Home-Components/CariJasa';
import Category from './Home-Components/Category';
// IMPORT COMPONENTS

class Home extends Component {
    render() {
        return (
            <div>

                <Jumbotron />

                <CariJasa />

                {/* DIVIDER */}
                <div style={{ background: '#f7f7f7', padding: '0 80px' }}>
                    <hr className="my-0" />
                    <hr className="my-0" />
                </div>
                {/* DIVIDER */}

                <Category />

            </div>
        );
    }
}

export default Home;