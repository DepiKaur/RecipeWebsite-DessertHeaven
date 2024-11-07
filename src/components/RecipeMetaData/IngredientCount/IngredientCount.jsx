import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import style from './IngredientCount.module.css';

export function IngredientCount({ count }) {
    return (
        <div className={style['ingredients-icon']}>
            <FontAwesomeIcon icon={faCarrot} size="lg" /> 
            <span>{count} ingr</span>
        </div>
    );
}
