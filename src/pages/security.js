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

class Security extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            url:[            
                
                
                {
                    link:"https://www.youtube.com/embed/tJwOY-BUqe4",
                    title: "class1"
                },
                {
                    link:"https://www.youtube.com/embed/6LeMW_fpQlU",
                    title: "class2"
                },
                {
                    link:"https://www.youtube.com/embed/rrbJr2PJ7hQ",
                    title: "class3"
                },
                {
                    link:"https://www.youtube.com/embed/ZmgcOvCWE_Y",
                    title: "class4"
                },
                {
                    link:"https://www.youtube.com/embed/6FKizYELc-s",
                    title: "class5"
                },
                {
                    link:"https://www.youtube.com/embed/D_rkCiqMdC4",
                    title: "class5"
                },
                {
                    link:"https://www.youtube.com/embed/hshIkxAAoe8",
                    title: "class5"
                },
                
            ]
         };
    }
    render() {
        
        return (
            <div className="App" style={{position:"relative"}}>
            <HomeButton />
            <div className="d-flex justify-content-center flex-wrap p-3  " >
            
            {               
                this.state.url.map((val,idx)=>{
                    return (
                        <LazyLoad height={200} offset={100} debounce={500} placeholder={<Loading />}>
                            
                            <div>
                            
                                <iframe className="m-4 animate__animated animate__fadeInRight animate__delay-2s " title={val.title}
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

export default Security;