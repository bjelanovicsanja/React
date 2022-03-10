import React from 'react';
import './Book.css';
import Picture from '../Picture/Picture';

export default function Book({
    name, year, author, quoute, image})
    {
        return (
            <div className='Book'>
                <Picture src={`./images/books/${image}`} alt={`${name} image`}/>
               <div className="container">
                   <div className="field">
                       <em>Name:</em>
                       <span>{name}</span>
                       </div>
                    <div className="field">
                        <em>Year:</em>
                        <span>{year}</span>
                        </div>

                    <div className="field">
                        <em>Author:</em>
                        <span>{author}</span>
                        </div>
                    <div className='field'>
                        <em>Quote:</em>
                        <span>{quoute}</span>
                        
                        </div>
                   </div>
               
               
               
               
                </div>
        );
    }

