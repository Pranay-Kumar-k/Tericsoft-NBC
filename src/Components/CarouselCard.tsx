import React, { useState } from 'react';
import "./CarouselCard.scss";
import { BannerParams } from './Interfaces/Interfaces';
import playIcon from "../assets/ic-play-circle-outline.svg";

export const CarouselCard = (props:BannerParams) => {
    // console.log(props)
        const {tags,title,duration,imageURL,videoMP4URL } = props
        const [hover,setHover] = useState(false);

    return (
        <>
        <div className="Card" onMouseOver={(e) => setHover(true)} onMouseLeave={(e) => setHover(false)}>
            <img src={imageURL} alt="background" className="background"/>
            {hover ? (
                <>
                <div className="bannerButton" onClick={(e) => window.open(videoMP4URL)}>
                    <img src={playIcon} alt="icon" width="50px" className="button"/>
                </div>
                <div className="title">
                    <p>{title}</p>
                </div>
                <div className="content">
                    <div className="tags">
                        {
                            tags.map((tag, index) => {
                            return ((index < 3) && <div key={title+ index} className="tag">{tag}</div>)
                            })
                        }
                    </div>
                    <div className="videoDuration">
                        <div className="duration">{duration+"s"}</div>
                    </div>
                </div>
                </>
            ):(
                <>
                    <div className="NotFocussed">
                        <h3 className="NotFoucussedTitle">{title}</h3>
                        <div className="content">
                            <div className="tags">
                                {
                                    tags.map((tag, index) => {
                                        return((index < 3) && <div key={title + index} className="tag">{tag}</div>)
                                    })
                                }
                            </div>
                            <div className="videoDuration">
                                <div className="duration">{duration+"s"}</div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            
        </div>
        </>
    )
}
