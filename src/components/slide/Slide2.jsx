import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from "react-router-dom";
import {projects} from "../../data";

function SlideProject() {
    const responsive = {
      
        desktop: {
          breakpoint: { max: 3000, min: 1024 }, 
          items: 4
        }
      
      };
    
    
    return(
        <div className="slide">
            <div className="container">
                <Carousel responsive={responsive} infinite={true} slidesToSlide={4}>
                  {projects.map(card=>(
                      <Link to="/" key={card.index}>
                          <div className="projectCard" key={card.index}>
                            <img src={card.img} alt=""/>
                            <div className="info">
                              <img src={card.pp} alt=""/>
                              <div className="texts">
                                <h2>{card.cat}</h2>
                                <span>{card.username}</span>
                              </div>
                            </div>
                          </div>
                      </Link>
                  ))} 
                </Carousel>
            </div>
        </div>
    )
}

export default SlideProject;