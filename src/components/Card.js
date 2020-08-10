import React from 'react';

function Card({ name, link, likes, onCardClick }) {

    function handleClick() {
        onCardClick(name, link);
    };

    return (
        <li className="card place__card">
            <img className="place__img" src={link} alt={name} onClick={handleClick}/>
            <button className="place__delete-button place__delete-button_disabled" type="button" />
            <div className="place__info">
                <p className="place__caption">{name}</p>
                <div className="place__likes-container">
                    <button className="place__like-button" type="button" />
                    <p className="place__like-count">{likes}</p>
                </div>
            </div>
        </li>
    );
  }
  
  export default Card;