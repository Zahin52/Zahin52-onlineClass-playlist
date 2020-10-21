import React, { Component } from 'react';
import LazyLoad from 'react-lazyload'; 
import HomeButton from './homebutton';
import '../App.css';
import "animate.css";
const Loading=()=>{
    return(
        <div style={{height:20}} className="post loading">
            <h5>Loading...</h5>
        </div>
    )
};
class Compiler extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            url:[            
                
                {
                    link:"https://www.youtube.com/embed/B5mz1gcrtMM",
                    title: "class1"
                },
                {
                    link:"https://www.youtube.com/embed/Uso9D7pPk4c",
                    title: "class2"
                },
                {
                    link:"https://www.youtube.com/embed/AUXz-3gPIIg",
                    title: "class3"
                },
                {
                    link:"https://www.youtube.com/embed/00vZ1jh0vsk",
                    title: "class4"
                },
                {
                    link:"https://www.youtube.com/embed/Gqe8ZLNtheU",
                    title: "class5"
                },
                {
                    link:"https://www.youtube.com/embed/mx2JJiuP8VA",
                    title: "class6"
                },
                {
                    link:"https://www.youtube.com/embed/FUcGFU06osc",
                    title: "class7"
                },
                {
                    link:"https://www.youtube.com/embed/kQcrGvVCGIU",
                    title: "class8"
                },
                {
                    link:"https://www.youtube.com/embed/66CZTjSBALc",
                    title: "class9"
                },
                {
                    link:"https://www.youtube.com/embed/PTtQJa2iT_s",
                    title: "class10"
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

export default Compiler;