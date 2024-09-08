import React, { createContext, useContext, useState } from 'react';
import itemData from '../data/GetData';
const DataContext = createContext();

function DataProvider({ children }) {
    const [data, setData] = useState(itemData);

    function getItemFromId(itemId)
    {
        const len = data.length
        for (let i = 0; i < len; i++)
        {
            if (data[i]['id'] === itemId) {
                return { ...data[i] };
            }
        }
        return false;
    }
    
    return (
        <DataContext.Provider value={{ data, getItemFromId }}>
            {children}
        </DataContext.Provider>
    );
}
export const useData = () => useContext(DataContext);
export default DataProvider;
