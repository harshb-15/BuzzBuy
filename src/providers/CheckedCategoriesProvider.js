import React, { createContext, useContext, useState } from 'react';
// import itemData from '../data/GetData';
const CheckedCategoriesContext = createContext();

function CheckedCategoriesProvider({ children }) {
    const [checkedCategories, setCheckedCategories] = useState([]);
    function onCategoryClick(category, isChecked ) {
        var newCheckedCategories;
        if (isChecked) {
            newCheckedCategories = [...checkedCategories, category];
        } else {
            newCheckedCategories = checkedCategories.filter(
                (val) => val !== category
            );
        }
        setCheckedCategories(newCheckedCategories);
    }
    return (
        <CheckedCategoriesContext.Provider value={{ checkedCategories, onCategoryClick }}>
            {children}
        </CheckedCategoriesContext.Provider>
    );
}
export const useCheckedCategories = () => useContext(CheckedCategoriesContext);
export default CheckedCategoriesProvider;
