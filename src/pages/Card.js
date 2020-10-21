import React, { Component } from 'react';
import {Link} from "react-router-dom";
import 'animate.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            to: ""
        }
    }

    render() {
        const margin_10 = {
            "margin": 10,
            padding:20
        }
        return (
            <div style={margin_10} className="animate__animated animate__fadeInLeft">
              <div className="card" style={{width: "18rem"}}>
                        <img style={{width: "18rem"}} className="card-img-top img-fluid" src="https://images.indianexpress.com/2020/04/books_1200.jpg" alt="" />
                        <div className="card-body text-center">
                            <h5 className="card-title ">{this.props.title}</h5>
                            <p className="card-text ">Online class related recorded video are here . Please click the button . it might be helpfull</p>
                            <li rel="noopener noreferrer" target="_blank"  className=" btn btn-primary">
                                <Link className="text-white" to={this.props.link}>Open Playlist</Link>
                            </li>
                        </div>
              </div>      
            </div>
        );
    }
}
Card.defaultProps = {
    text: "zahin"
};
export default Card;