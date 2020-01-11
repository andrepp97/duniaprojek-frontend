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

                <Category />

            </div>
        );
    }
}

export default Home;