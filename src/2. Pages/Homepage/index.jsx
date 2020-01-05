import React, { Component } from 'react';

// IMPORT COMPONENTS
import Jumbotron from './Home-Components/Jumbotron/jumbotron';
// IMPORT COMPONENTS

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron />

                <div className="container py-5">
                    <div className="card p-5 my-5">
                        <h1>SESUATU</h1>
                        <h2>LOREM IPSUM</h2>
                        <h3>YO MAMEN</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;