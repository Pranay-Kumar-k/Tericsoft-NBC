import React from 'react';
import "./CarouselComponent.scss"
import { CarouselCard } from './CarouselCard';
import { CarouselDataParams } from './Interfaces/Interfaces';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

export const CarouselComponent = (props:CarouselDataParams) => {
    const {carouselItems,title} = props;
    console.log(carouselItems)
    return (
        <>
        <h1 className="Title">{title}</h1>
        <div className="Highlighter"></div>
        <div>
            <Carousel 
            ssr
            partialVisbile
            keyBoardControl
            responsive={responsive}
            >
            {carouselItems && carouselItems.map((item,index) => {
                            return(
                                <CarouselCard key={index} {...item}/>
                            )
            })}
            </Carousel>
            
        </div>
        </>
    )
}
