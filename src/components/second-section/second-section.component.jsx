import React from 'react';
import medicine from '../../Assets/images/adtralza-packshot-gebaut-01 2.png';
import Fade from 'react-reveal/Fade';

import '../../Assets/css/second-section.styles.min.css';

const SecondSectionComponent = () => {
  return (
    <div className="second-section__main-wrapper">
      <Fade left >
      <img
        className="second-section__main-image"
        src={medicine}
        alt="medicine"
      />
      </Fade>
      
      <Fade right>
      <div className="second-section__content-wrapper">
        <p className="second-section__main-text-color">
          {' '}
          It is the first and only biologic developed to specifically neutralize
          IL-13, a key driver of atopic dermatitis signs and symptoms(1,2){' '}
        </p>
        <p className="second-section__black-color__small-size">
          Learn more about how Adtralza® works and how to use it in treatment.
        </p>
      </div>
      </Fade>
      
    </div>
  );
};

export default SecondSectionComponent;
