import React, { useState } from 'react';

const MainNav = () => {
  const [isToggleButtonClicked, setIsToggleButtonClicked] = useState(false);
  const [isFirstNavOpenedOnMobile, setIsFirstNavOpenForMobile] = useState(false);
  const [isSecondNavOpenedOnMobile, setIsSecondNavOpenedOnMobile] = useState(false);

  const handleToggleButtonClick = () => {
    setIsToggleButtonClicked(!isToggleButtonClicked);
  };

  const handleOpenFirstNav = () => {
    setIsFirstNavOpenForMobile(!isFirstNavOpenedOnMobile)
  }

  const handleOpenSecondNav = () => {
    setIsSecondNavOpenedOnMobile(!isSecondNavOpenedOnMobile)
  }

  return (
    <div className="main-nav__container">
      <ul className="main-nav__wrapper">
        <li className="first-item__custom-styles"> Bedingungen </li>
        <li>
          <div className="navbar">
            <div className="dropdown">
              <button className="dropbtn">Behandlungen</button>
              <ul className="dropdown-content">
                <li className="first-item__custom-styles">
                  <div className="navbar-sec">
                    <div className="dropdown-sec">
                      <button className="dropbtn-sec">Adtralza</button>
                      <ul className="dropdown-content-sec">
                        <li className="first-item__custom-styles-sec">
                          {' '}
                          Overview{' '}
                        </li>
                        <li> Mode of Action </li>
                        <li> Efficacy </li>
                        <li> Quality of Life </li>
                        <li> Safety </li>
                        <li> Dosing </li>
                        <li> News </li>
                        <li> Technical Information </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li> Diavonex </li>
                <li> Diavobet </li>
                <li> Enstilar </li>
                <li> Fucidin </li>
                <li> Kyntheum </li>
                <li> Protopic</li>
                <li> Skinoren </li>
                <li> Tralokinumab </li>
                <li> Xamiol </li>
              </ul>
            </div>
          </div>
        </li>
        <li> Veranstaltungen </li>
        <li> Werkzeuge </li>
        <li> Forschung und Erkenntnisse </li>
      </ul>

        {
          isToggleButtonClicked && <div>
          <div className="backdrop" onClick={handleToggleButtonClick}></div>
          <div className={"main-nav__mobile" } >
            <ul className="main-nav__mobile-wrapper">
              <li> Bedingungen </li>
              <li >
              <p onClick={handleOpenFirstNav}> Behandlungen </p> 
              {
                isFirstNavOpenedOnMobile && <ul className="secondary-mobile__nav">
                  <li>
                    <p onClick={handleOpenSecondNav}> Adtralza </p>
                    {
                      isSecondNavOpenedOnMobile && (
                        <ul className='mobile__second-nav'>
                          <li>
                          {' '}
                            Overview{' '}
                          </li>
                          <li> Mode of Action </li>
                          <li> Efficacy </li>
                          <li> Quality of Life </li>
                          <li> Safety </li>
                          <li> Dosing </li>
                          <li> News </li>
                          <li> Technical Information </li>
                        </ul>
                      )
                    } 
                  </li>
                  <li> Diavonex </li>
                <li> Diavobet </li>
                <li> Enstilar </li>
                <li> Fucidin </li>
                <li> Kyntheum </li>
                <li> Protopic</li>
                <li> Skinoren </li>
                <li> Tralokinumab </li>
                <li> Xamiol </li>
                </ul>
              }
                
              </li>
              <li> Veranstaltungen </li>
              <li> Werkzeuge </li>
              <li> Forschung und Erkenntnisse </li>
            </ul>
          </div>
        </div>
        }
        


      <button
        type="button"
        className="navbar-toggle"
        onClick={handleToggleButtonClick}
      >
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
      </button>
    </div>
  );
};

export default MainNav;
