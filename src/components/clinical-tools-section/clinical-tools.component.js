import React from 'react';
import ClinicCardComponent from '../clinic-card-component/clinic-card.component';
import NurseImage from "../../Assets/images/GettyImages.png";
import InjectionImage from "../../Assets/images/Screenshot.png";
import Fade from 'react-reveal/Fade';

import "../../Assets/css/clinic-tools.styles.min.css"

const ClinicToolsComponent = () => {
  const cards = [
    {
    image: NurseImage,
    title: 'Dosing guide',
    content: 'Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1). ',
    callToAction: 'Learn more about application and dosing'
  }, 
  {
    image: InjectionImage,
    title: "Patient injection made simple",
    content: "This step by step video guide shows the patient how to self inject using the two syringes that come in the Adtralza® carton. ",
    callToAction: "Watch the video"

  }
]
  return (
    <div> 
    <Fade top>
    <p className='clinic-tools__main-title'> Clinical tools - at a glance </p>
    </Fade>
     
      <div className='clinic-tools__cards-wrapper'>
      
      {
        cards.map((card, index) =>{
          if(index%2 === 0){
            return (
              <Fade left>
              <ClinicCardComponent key={card.title} card={card}/>
              </Fade>
            )
          }else {
            return (
              <Fade right>
              <ClinicCardComponent key={card.title} card={card}/>
              </Fade>
            )
          }
        })
      }
      </div>
      
      
    </div>
  )
};

export default ClinicToolsComponent;