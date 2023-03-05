import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from "react-router-dom";
import {cards} from "../../data";

function Slide() {
    const responsive = {
      
        desktop: {
          breakpoint: { max: 3000, min: 1024 }, 
          items: 5
        }
      
      };
    
    
    return(
        <div className="slide">
            <div className="container">
                <Carousel responsive={responsive} infinite={true} slidesToSlide={5}>
                  {cards.map(card=>(
                      <Link to="/gigs?cat=design" key={card.index}>
                          <div className="catCard" key={card.index}>
                            <img src={card.img} alt=""/>
                            <span className="desc"> {card.desc}</span>
                            <span className="title"> {card.title}</span>
                          </div>
                      </Link>
                  ))} 
                </Carousel>
            </div>
        </div>
    )
}

export default Slide;