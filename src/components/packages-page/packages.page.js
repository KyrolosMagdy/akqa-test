import React from 'react';
import FirstPackage from '../../Assets/images/Group 29612145.png';
import SecondPackage from '../../Assets/images/Group 29612146.png';
import BestPackage from '../../Assets/images/Group 29612147.png';
import Fade from 'react-reveal/Fade';

import '../../Assets/css/packages-page.styles.min.css';
const PackagesPage = () => {
  return (
    <div className="packages-page__main-containers">
     
      <div className="packages-page__main-wrapper"> 
      <Fade left> 
      <div className="packages-page__content-wrapper">
          <img
            className="packages-page__package-image"
            src={FirstPackage}
            alt="package"
          />
          <p className="packages-page__title">
            {' '}
            Long term sustained improvement{' '}
          </p>
          <p className="packages-page__main-content">
            {' '}
            9 out of 10 respondents experienced sustained disease control in
            clinical trials 10, providing sustained improvements in the burden
            of disease(1,2, 1, 8*†‡).{' '}
          </p>
          <p className="packages-page__tail-content">
            {' '}
            See efficacy and trial data{' '}
          </p>
        </div>
      </Fade>
        <Fade right>
          <div className="packages-page__content-wrapper">
          <img
            src={SecondPackage}
            alt="package"
            className="packages-page__package-image"
          />
          <p className="packages-page__title">
            {' '}
            Improvements in the burden of disease
          </p>
          <p className="packages-page__main-content">
            {' '}
            Patients in clinical trials saw an improvement in Quality of Life
            with early symptom relief and sustained improvements in burden of
            disease from week 16 to 32(12,13).{' '}
          </p>
          <p className="packages-page__tail-content">
            {' '}
            Learn more about quality of life improvements{' '}
          </p>
        </div>
        </Fade>
        
        <Fade left>
        <div className="packages-page__content-wrapper">
          <img
            src={BestPackage}
            alt="package"
            className="packages-page__package-image"
          />
          <p className="packages-page__title"> Good safety profile</p>
          <p className="packages-page__main-content">
            The overall frequency and severity of adverse events with Adtralza®
            were comparable to placebo at 16 weeks* and 52 weeks(19).
          </p>
          <p className="packages-page__tail-content"> See safety profile </p>
        </div>
        </Fade>
        
      </div>
    </div>
  );
};

export default PackagesPage;
