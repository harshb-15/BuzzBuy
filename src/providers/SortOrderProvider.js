import React, { createContext, useContext, useState } from 'react';
const SortOrderContext = createContext();

function SortOrderProvider({ children }) {
    const [sortOrder, setSortOrder] = useState('');

    function setNewSortOrder(newOrder)
    {
        setSortOrder(newOrder);
    }

    return (
        <SortOrderContext.Provider value={{ sortOrder, setNewSortOrder }}>
            {children}
        </SortOrderContext.Provider>
    );
}
export const useSortOrder = () => useContext(SortOrderContext);
export default SortOrderProvider;
