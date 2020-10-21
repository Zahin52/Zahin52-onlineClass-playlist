import React, { Component } from 'react';
import LazyLoad from 'react-lazyload'; 
import HomeButton from './homebutton';
import '../App.css';
import 'animate.css';

const Loading=()=>{
    return(
        <div style={{height:20}} className="post loading">
            <h5>Loading...</h5>
        </div>
    )
};
class Simulation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            url:[
                
                {
                    link:"https://www.youtube.com/embed/Gd1q8J7h4uY",
                    title: "class1"
                },
                {
                    link:"https://www.youtube.com/embed/q_U5agn2xlg",
                    title: "class2"
                },
                {
                    link:"https://www.youtube.com/embed/bI4GvnyBMQM",
                    title: "class3"
                },
                {                    
                    link:"https://www.youtube.com/embed/iQCNrlTktp0",
                    title: "class4"
                },
                {                    
                    link:"https://www.youtube.com/embed/lkpHIT8ZXzU",
                    title: "class5"
                },
                {
                    link:"https://www.youtube.com/embed/Q1fv2RA8aLc",                   
                    title: "class6"
                },
                {
                    link:"https://www.youtube.com/embed/R472JFeFJNY",
                    title: "class7"
                },
                {
                    link:"https://www.youtube.com/embed/bAFS06fP7V4",
                    title: "class8"
                },
                {
                    link:"https://www.youtube.com/embed/zfqiri3vmjI",
                    title: "class9"
                },
                {
                    link:"https://www.youtube.com/embed/iRozV55UuiI",                    
                    title: "class10"
                },
                {
                    link:"https://www.youtube.com/embed/XhVpW1us9BI",
                    title: "class11"
                },
                {
                    link:"https://www.youtube.com/embed/pSl20U0gAVc",
                    title: "class12"
                },
                
                
            ]
         };
    }
    render() {
        
        return (
            <div className="App" style={{position:"relative"}}>
                <HomeButton />
                <div className="d-flex justify-content-center flex-wrap p-3 " >
                
                {
                   
                    this.state.url.map((val,idx)=>{
                        return (
                            <LazyLoad height={200} offset={100} debounce={500} placeholder={<Loading />}>
                                
                                <div>
                                
                                    <iframe className="m-4 animate__animated animate__fadeInRight animate__delay-2s" title={val.title}
                                    width="350" height="250" 
                                    src={val.link} 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen" 
                                    allowfullscreen>

                                    </iframe>

                                </div>
                            </LazyLoad>
                        );
                    })
                }

            
            </div>
           </div>
        );
    }
}

export default Simulation;