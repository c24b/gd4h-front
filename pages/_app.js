import '../styles/globals.css'
import { DatasetsProvider } from '../context/DatasetsProvider';
import { SearchResultsProvider } from '../context/SearchResultsProvider';

function MyApp({ Component, pageProps }) {
  return (
    <DatasetsProvider>
      <SearchResultsProvider>
        <Component {...pageProps} />
      </SearchResultsProvider>
    </DatasetsProvider>)
}

export default MyApp
