import React, { Component } from 'react';
import { withRouter, Route, Switch } from "react-router-dom";

// IMPORT PAGES & COMPONENTS
import Navbar from './1. Components/Navbar/navbar'
import PageNotFound from './2. Pages/PageNotFound'
import Home from './2. Pages/Homepage'
import Signup from './2. Pages/AuthPage/signup'
import Login from './2. Pages/AuthPage/login'
import ForgotPass from './2. Pages/AuthPage/forgot'
import Footer from './1. Components/Footer/footer'
// IMPORT PAGES & COMPONENTS

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/daftar' exact component={Signup} />
          <Route path='/masuk' exact component={Login} />
          <Route path='/lupa-password' exact component={ForgotPass} />
          <Route path='*' exact component={PageNotFound} />
        </Switch>

        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
