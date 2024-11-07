import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './RecipeCard.module.css';

// Kör npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { displayStarRating, renderDifficultyBars } from '../Utils/RecipeCard.jsx';
import { RecipeTime } from '../RecipeMetaData/RecipeTime/RecipeTime.jsx';

export default function RecipeCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.preventDefault();                // to prevent the Link from being triggered when the heart is clicked
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/recipes/${props.id}`} className={style['card-link']}>
      <section className={style.card}>
        <div className={style['image-container']}>
          <img src={props.imageUrl} alt={props.title} className={style['recipe-image']} />
          {/* Heart-Icon to mark a Favorite */}
          <FontAwesomeIcon
            icon={isFavorite ? solidHeart : regularHeart}      // to toggle between outlined and solid heart
            className={`${style['favorite-icon']} ${isFavorite ? style['filled'] : ''}`}
            onClick={toggleFavorite}
          />
        </div>
        <div>
          <ul className={style['recipe-list']}>
            <li key={props.id}>
              <h3>{props.title}</h3>
              <p className={style['desc']}>{props.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <ul className={style['recipe-list']}>
            <li key={props.id}>
              <div className={style['stars']}>
                {displayStarRating(props.rating)}
              </div>
              <ul className={style.details}>
                <li>
                  <RecipeTime timeInMins={ props.time }/>
                </li>
                <li>
                  {renderDifficultyBars(props.time, style)}
                </li>
              </ul>
            </li>
          </ul>
        </div>        
      </section>
    </Link>
  );
}