import '../styles/globals.css'
import { DatasetsProvider } from '../context/DatasetsProvider';

function MyApp({ Component, pageProps }) {
  return (
    <DatasetsProvider>
      <Component {...pageProps} />
    </DatasetsProvider>)
}

export default MyApp
