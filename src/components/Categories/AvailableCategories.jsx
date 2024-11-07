import { useState } from 'react';

import './AvailableCategories.css';

export default function AvailableCategories(props) {
    const [activeCategory, setActiveCategory] = useState(null);
    
    const handleCategoryClick = (event) => {
        const selectedCategory = event.currentTarget.value;

        if (activeCategory === selectedCategory) {
            setActiveCategory(null);
            props.categoryHandler(null);
        } else {
            setActiveCategory(selectedCategory);
            props.categoryHandler(selectedCategory);
        }
    }

    return (
        <>
            {props.availableCategories.length > 0 ? (
                <ul className='nav-list'>
                    {props.availableCategories.map((item, index) => {
                        return (
                            <li key={index}>
                                <button 
                                    className={`category ${activeCategory === item ? 'activated-button' : ''}`} // to show activated-category 
                                    onClick={handleCategoryClick} 
                                    value={item}
                                >
                                    {item}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>Loading categories...</p>
            )}
        </>
    );
}