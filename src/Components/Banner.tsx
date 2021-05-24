import React from 'react'
import { BannerParams } from './Interfaces/Interfaces';
import "./Banner.scss";
import playIcon from "../assets/ic-play-circle-outline.svg";

export const Banner = (props:BannerParams) => {
    const {
        description,
        title,
        videoMP4URL
    } = props;
    console.log(videoMP4URL)
    return (
        <div className="Container" >
            <div className={"backgroundVideoMask"}></div>
             <div className={"backgroundVideo"}>
                <video autoPlay muted loop>
                    <source
                        src={`https://olymprio-a.akamaihd.net/HD/video_sports/NBCU_Sports_Group_Staging_-_Olympics_Summer/551/607/oly_tf_nationalsw400hurdle_1907281564359195421_1400k.mp4`}
                        // src={videoMP4URL.toString()}
                        type="video/mp4"/>
                </video>
            </div>
            <div className="content">
                <div className="bannerInfoWrapper">
                    <div className="bannerHighlighter">
                        <div className="legendShape"></div>
                        <div className="legendTitle">
                            {"Highlights"}
                        </div>
                    </div>
                    <div className="bannerTitle">
                        {title}
                    </div>
                    <div className="bannerDesc">
                        {description}
                    </div>
                    <div className="bannerButton" onClick={(e) => window.open(videoMP4URL)}>
                        <img src={playIcon} alt="icon" width="50px" className="button"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
