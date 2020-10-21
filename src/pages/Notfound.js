import React, { Component } from 'react';
 
import HomeButton from './homebutton';
import '../App.css';

import 'animate.css';


class Notfound extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         };
    }
    render() {
        
        return (
        <div className="App" >
            <HomeButton />
            <div className="d-flex justify-content-center align-items-center p-3 " style={{height:"100vh"}} >            
           
                <div className="text-white text-center p-5" style={{background: "rgba(0, 0, 0, 0.79) none repeat scroll 0% 0%"}}>
                    <h1>Ohnoooo! 404!</h1>
                    <h2>Sorry! Found no Video Content</h2>
                </div>
        
            </div>
       </div>
        );
    }
}

export default Notfound;