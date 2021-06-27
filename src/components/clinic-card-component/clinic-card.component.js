import React from "react";

import "../../Assets/css/clinic-card.styles.min.css";

const ClinicCardComponent = ({ card }) => {
  return (
    <div className='clinic-card__wrapper'>
      <div>
        <img className='clinic-card__image' src={card.image} alt='card' />
        <p className='clinic-card__title'> {card.title} </p>
        <p className='clinic-card__main-content'> {card.content} </p>
        <p className='clinic-card__action-text'> {card.callToAction} </p>
      </div>
    </div>
  )
}

export default ClinicCardComponent;