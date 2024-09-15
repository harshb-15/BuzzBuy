// SortDropdown.js
import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';

const SortFilter = ({onSelectSort = f=>f}) => {
    const [isActive, setIsActive] = useState(false);
    const [activeSort, setActiveSort] = useState("");

    const toggleDropdown = () => {
        setIsActive(!isActive);
    };

    const handleSort = (sortOption) => {
        console.log(`Selected sort option: ${sortOption}`);
        if (sortOption === 'l2h') setActiveSort(": Price Low to High");
        else if (sortOption === 'h2l') setActiveSort(": Price High to Low");
        else if (sortOption === 'r') setActiveSort(": Rating");
        else setActiveSort("");
        onSelectSort(sortOption);
        setIsActive(false); // Close the dropdown after selection
    };

    return (
        <div className="menu">
            <p class="menu-label has-text-weight-bold">Sort</p>
            <div className={`dropdown ${isActive ? 'is-active' : ''}`}>
                <div className="dropdown-trigger menu-list">
                    <button
                        className="button is-fullwidth"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                        onClick={toggleDropdown}
                    >
                        <span>Sort By {activeSort}</span>
                        <span className="icon is-small">
                            <i
                                className="fas fa-angle-down"
                                aria-hidden="true"
                            ></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <p
                            className="dropdown-item"
                            onClick={() => handleSort('l2h')}
                        >
                            Price Low to High
                        </p>
                        <p
                            className="dropdown-item"
                            onClick={() => handleSort('h2l')}
                        >
                            Price High to Low
                        </p>
                        <p
                            className="dropdown-item"
                            onClick={() => handleSort('r')}
                        >
                            Rating 
                        </p>
                        <p
                            className="dropdown-item"
                            onClick={() => handleSort()}
                        >
                            None
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortFilter;
