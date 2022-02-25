import { createContext } from 'react';
import { useState } from 'react';

const DatasetsContext = createContext(undefined);
const DatasetsDispatchContext = createContext(undefined);

const DatasetsProvider = ({ children }) => {

    const [currentDatasets, setCurrentDatasets] = useState([]);
    console.log(currentDatasets);
    return (
        <DatasetsContext.Provider value={currentDatasets}>
            <DatasetsDispatchContext.Provider value={setCurrentDatasets}>
                {children}
            </DatasetsDispatchContext.Provider>
        </DatasetsContext.Provider>
    );
}

export { DatasetsProvider, DatasetsContext, DatasetsDispatchContext };