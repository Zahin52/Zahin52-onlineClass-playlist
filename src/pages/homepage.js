import React,{Component} from 'react';

import Card from './Card.js';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            subject:[
                {
                    title:"Artificial intelligence",
                    link:"/ai"
                },
                {
                    title:"AI LAb",
                    link:"/ailab"
                },
                {
                    title:"Compiler ",
                    link:"/compiler"
                },
                {
                    title:"Compiler Lab ",
                    link:"/compilerLAB"
                },
                {
                    title:"Simulation",
                    link:"/simulation"
                },
                {
                    title:"Graphics & designing",
                    link:"/graphics"
                },
                {
                    title:"Graphics Lab",
                    link:"/graphicslab"
                },
                {
                    title:"Security",
                    link:"/security"
                },
            ],
         };
    }
    render() {
        return (
            <div  className = "App" >
            <div className="d-flex justify-content-center flex-wrap">
                {
                    this.state.subject.map(value=> <Card link={value.link} title={value.title} />)
                }
                
            </div>
        </div>
        );
    }
}

export default Home;

