import React, { Component } from 'react';
import { withRouter, Route, Switch } from "react-router-dom";

// IMPORT PAGES & COMPONENTS
import Navbar from './1. Components/Navbar/navbar'
import Home from './2. Pages/Homepage'
import Footer from './1. Components/Footer/footer'
// IMPORT PAGES & COMPONENTS

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>

        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>

        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
