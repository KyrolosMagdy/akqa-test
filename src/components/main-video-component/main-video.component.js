import React, { useState } from 'react';
import PlayButtonImage from '../../Assets/images/play-pause-button.png';
import ShikaGoal from '../../Assets/videos/shika-awesome-goal.mkv';
import ReactPlayer from 'react-player';
import Fade from 'react-reveal/Fade';

import '../../Assets/css/main-video-component.styles.min.css';

const MainVideoComponent = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClicked = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const hanldeVideoPlay = () => {
    console.log('play');
    handleVideoClicked();
  };

  return (
    <div className="main-video__overall-container">
      <div className="main-video__page-wrapper">
        <Fade right>
          <div className="main-video__content-wrapper">
            <p className="main-video__main-text">
              {' '}
              Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs
              and symptoms.{' '}
            </p>
            <p className="main-video__secondary-text">
              {' '}
              By specifically targeting the IL-13 cytokine, Adtralza® inhibits the
              interaction with type II receptors and prevents IL-13-induced
              inflammatory responses in the skin(1,2). <br />
              <br /> Adtralza® selectively modulates the dysregulated immune
              system by(1): <br /> <br /> — Reducing markers of skin inflammation{' '}
              <br /> — Improving markers of skin barrier integrity <br /> —
              Reducing epidermal thickness
            </p>
          </div>
        </Fade>
        <Fade left>
          <div className="main-video__video-wrapper">
            <ReactPlayer
              url={ShikaGoal}
              className="main-video__video"
              playing={isVideoPlaying}
              controls={isVideoPlaying ? true : false}
              onPlay={() => !isVideoPlaying && hanldeVideoPlay()}
              onPause={() => isVideoPlaying && hanldeVideoPlay()}
            />
            {!isVideoPlaying && (
              <img
                src={PlayButtonImage}
                alt="play-circle"
                className="main-video__play-pause"
                onClick={hanldeVideoPlay}
              />
            )}
          </div>
        </Fade>
        
      </div>
    </div>
  );
};

export default MainVideoComponent;
