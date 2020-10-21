import React, { Component } from 'react';
import HomeButton from './homebutton';
import LazyLoad from 'react-lazyload'; 
import '../App.css';
import 'animate.css';
const Loading=()=>{
    return(
        <div style={{height:20}} className="post loading">
            <h5>Loading...</h5>
        </div>
    )
};
class Compilerlab extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            url:[            
                
                {
                    link:"https://www.youtube.com/embed/-9GFXkmpFvY",
                    title: "class1"
                },
                {
                    link:"https://www.youtube.com/embed/uM6g4EfG84w",
                    title: "class2"
                },
                {
                    link:"https://www.youtube.com/embed/DOf8cH2CJXk",
                    title: "class3"
                },
                {
                    link:"https://www.youtube.com/embed/dfqgC4_WMsM",
                    title: "class4"
                },
                {
                    link:"https://www.youtube.com/embed/y6-GLk8mWh0",
                    title: "class5"
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

export default Compilerlab;