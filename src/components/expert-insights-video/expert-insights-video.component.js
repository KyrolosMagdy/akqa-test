import React from "react";
import videoPlaceholderImage from "../../Assets/images/Frame 3.png";

import "../../Assets/css/video-card.styles.min.css";

const VideoCard = () => {
  return (
    <div className='video-card__main-wrapper'>
      <img src={videoPlaceholderImage} className='video-card__image-placeholder' alt='card' />
      <div className="video-card__content-wrapper">
        <p className='video-card__title'> Video title </p>
        <p className='video-card__content'> Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image </p>
      </div>
     
    </div>
  )
}

export default VideoCard