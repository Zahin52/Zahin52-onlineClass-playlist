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
class Ai extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            url:[
                
                {
                    link:"https://www.youtube.com/embed/AdafkWOlJWk",
                    title: "class1"
                },
                {
                    link:"https://www.youtube.com/embed/R2JQLFmjJNI",
                    title: "class2"
                },
                {
                    link:"https://www.youtube.com/embed/tH4xuH1yQ5w",
                    title: "class3"
                },
                {                    
                    link:"https://www.youtube.com/embed/9Wyfb7J9tlI",
                    title: "class4"
                },
                {                    
                    link:"https://www.youtube.com/embed/DYASYGhC_XA",
                    title: "class5"
                },
                {
                    link:"https://www.youtube.com/embed/4wMYcLS91sc",                   
                    title: "class6"
                },
                {
                    link:"https://www.youtube.com/embed/DxjGfH5j4Uc",
                    title: "class7"
                },
                {
                    link:"https://www.youtube.com/embed/2xp6z4eEa-k",
                    title: "class8"
                },
                {
                    link:"https://www.youtube.com/embed/yRyg6jV45OE",
                    title: "class9"
                },
                {
                    link:"https://www.youtube.com/embed/pnMq30ZRY0Q",                    
                    title: "class10"
                },
                {
                    link:"https://www.youtube.com/embed/Y8cA1154v1I",
                    title: "class11"
                },
                {
                    link:"https://www.youtube.com/embed/GSLLVz62m_I",
                    title: "class12"
                },
                {
                    link:"https://www.youtube.com/embed/miOGICITPGs",
                    title: "class13"
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

export default Ai;