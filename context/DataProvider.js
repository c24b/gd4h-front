import { createContext, useContext } from 'react';
import { useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [datasets, setDatasets] = useState();

    const contextValue = {
        currentDatasets: {
            datasets,
            setDatasets
        }
    };

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
}

export const useAppContext = () => {
    return useContext(DataContext);
}