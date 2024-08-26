import React, { createContext, useContext, useState } from 'react';
import itemData from '../data/GetData';
const DataContext = createContext();

function DataProvider({ children })
{
    const [data, setData] = useState(itemData);
    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    );
}
export const useData = () => useContext(DataContext);
export default DataProvider;
