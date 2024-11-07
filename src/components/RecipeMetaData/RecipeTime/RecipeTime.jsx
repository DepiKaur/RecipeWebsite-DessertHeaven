import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { refactorRecipeTime } from '../../Utils/RecipeCard.jsx';
import style from './RecipeTime.module.css';

export function RecipeTime({ timeInMins }) {
    return (
        <div className={style.time}>
            <FontAwesomeIcon icon={faClock} />
            <span>{refactorRecipeTime(timeInMins)}</span>
        </div>
    );
}
