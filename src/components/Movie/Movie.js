import React from 'react';
import './Movie.css';

import Picture from '../Picture/Picture';

export default function Movie ({ name, year, genre, director, actors, image }) {
    return (
      <div className="Movie">
        <div className="img_container">
          <Picture src={`./images/movies/${image}`} alt={`${name} image`} />
        </div>
      
          <div className="text_container">
            <div className="field">
              <em>Name:</em>
              <span>{name}</span>
            </div>
            <div className="field">
              <em>Year:</em>
              <span>{year}</span>
            </div>
            <div className="field">
              <em>Genre:</em>
              <span>{genre}</span>
            </div>
            <div className="field">
              <em>Directed by:</em>
              <span>{director}</span>
            </div>
            <div className="field">
              <em>Actors:</em>
              <span>{actors}</span>
            </div>
          </div>
        </div>
      
      
    );
  }
  