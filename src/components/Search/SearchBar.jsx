import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './SearchBar.css';

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        props.onSearch(newSearchTerm);
    };

    return (
        <div className="search-container">
            <div className='search-div'>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
        </div>
    );
}

export default SearchBar;