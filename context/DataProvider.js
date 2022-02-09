import { createContext } from 'react';
import { useState } from 'react';

const DataContext = createContext(undefined);
const DataDispatchContext = createContext(undefined);

const DataProvider = ({ children }) => {

    const [currentDatasets, setCurrentDatasets] = useState([]);

    return (
        <DataContext.Provider value={currentDatasets}>
            <DataDispatchContext.Provider value={setCurrentDatasets}>
                {children}
            </DataDispatchContext.Provider>
        </DataContext.Provider>
    );
}

export { DataProvider, DataContext, DataDispatchContext };