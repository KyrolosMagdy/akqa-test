import React from 'react';
import coverImage from '../../Assets/images/Group.png';
import logoImage from '../../Assets/images/Adtralza-global .png';
import Fade from 'react-reveal/Fade';

import '../../Assets/css/first-section.styles.min.css';

const FirstSectionComponent = () => {
  return (
    <div className="first-section__wrapper">
      <img src={coverImage} className="first-section__main-image" alt="cover" />
      <div className="first-section__content-wrapper">
        <Fade right>
         <img
          className="first-section__secondary-image"
          src={logoImage}
          alt="Adtealza-global"
        />
        </Fade>
       <Fade left>
        <p>
          {' '}
          Adtralza® is a new treatment for adult patients with
          moderate-to-severe atopic dermatitis (eczema) who are candidates for
          systemic therapy.{' '}
        </p>
       </Fade>
       
      </div>
    </div>
  );
};

export default FirstSectionComponent;
