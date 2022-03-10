import React from 'react';
import './IdCard.css';

import Picture from '../Picture/Picture';


export default function IdCard({ name, date, city, image}){
  console.log("../../images/people/"+image);
    return(
        <div className="IdCard">
      <div className="img_container">
        <Picture src={`../../images/people/${image}`} alt={`${name} image`} />
      </div>
      <div className="text_container">
        <div className="field">
          <p className='p_card'>Name and surname:</p>
          <span className='span_card'>{name}</span>
        </div>
        <div className="field">
          <p className='p_card'>Date:</p>
          <span>{date}</span>
        </div>
        <div className="field">
          <p className='p_card'>City:</p>
          <span>{city}</span>
        </div>
      </div>
    </div>
  );
}

    