import React from 'react';
import LionImage from "../../Assets/images/Fill 29.png";

import "../../Assets/css/footer-component.styles.min.css";

const FooterComponent = () => {
  return (
    <div className='footer-component__wrapper'>
      <div className='footer__content-wrapper'>
        <img src={LionImage} alt='lion' />
          <p className='footer__main-content'> © Copyright LEO Pharma 2020 <br />
            LEO and the LEO Lion Design <br />
            are registered trademarks<br />
            of LEO Pharma <br/>
            All rights reserved <br />  <br />
            <span className='main-content__link'>LEO Pharma corporate website  </span>
          </p>
      </div>
      <ul className='list-wrapper'>
        <li> Contact </li>
        <li> Imprint </li>
        <li> Conditions </li>
        <li> Terms of use </li>
        <li> Privacy </li>
        <li> Cookie content </li>
      </ul>
    </div>
  )
}

export default FooterComponent