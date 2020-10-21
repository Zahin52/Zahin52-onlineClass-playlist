import React,{Component} from 'react';
import Home from './pages/homepage';
import Ai from './pages/ai';
import Compiler from './pages/compiler';
import Compilerlab from './pages/compilerlab';
import Graphics from './pages/graphics';
import Security from './pages/security';
import Simulation from './pages/simulation';
import Notfound from './pages/Notfound'
import 'bootstrap/dist/css/bootstrap.min.css';
import LazyLoad from 'react-lazyload'; 

import $ from 'jquery';
import Popper from 'popper.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";




// import logo from './logo.svg';
import './App.css';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         };
    }
    render() {
        return (
            <Router>
                <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path="/ai" component={Ai}></Route>
                <Route exact path="/compiler" component={Compiler}></Route>
                <Route exact path="/compilerLAB" component={Compilerlab}></Route>
                <Route exact path="/graphics" component={Graphics}></Route>
                <Route exact path="/security" component={Security}></Route>
                <Route exact path="/simulation" component={Simulation}></Route>
                <Route exact path="/404" component={Notfound}></Route>
                <Redirect to='/404'></Redirect>
                </Switch>
            </Router>
        );
    }
}

export default App;

