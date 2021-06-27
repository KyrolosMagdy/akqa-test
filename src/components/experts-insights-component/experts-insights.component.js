import React from "react";
import VideoCard from "../expert-insights-video/expert-insights-video.component";
import Fade from 'react-reveal/Fade';

import "../../Assets/css/experts-insights.styles.min.css"

const ExpertsInsight = () => {
  return (
    <div className='experts-insights__main-container'>
      <Fade top>
      <p className='experts-insights__title'> KOL Videos - get expert insights here </p>
      </Fade>
      <Fade bottom>
      <p className='experts-insights__main-content'> See what Key opinion leaders have to say about their experiences with Adtralza®  </p>  
      
      </Fade>
      <div className='experts-insights__videos-wrapper'>
        <Fade left>
          <VideoCard />
        </Fade>
        <Fade right>
          <VideoCard />
        </Fade>
        <Fade left>
          <VideoCard />
        </Fade>
        <Fade right>
          <VideoCard />
        </Fade>
      </div>
    </div>
  )
};

export default ExpertsInsight;