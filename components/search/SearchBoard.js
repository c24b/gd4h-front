import { Col, Container, Row } from '@dataesr/react-dsfr';
import SearchBar from './SearchBar';
import utilStyles from '../../styles/utils.module.css';
import styles from './SearchBoard.module.css';
import Filters from '../filters/Filters';
import { SearchResultsContext } from '../../context/SearchResultsProvider';
import { useContext } from 'react';

const SearchBoard = ({ datasetsCount, allFilters }) => {

    const searchResults = useContext(SearchResultsContext);

    const generateTitle = (datasetsCount) => {
        return searchResults == undefined || searchResults == "" ?
            (
                <h4>
                    Jeux de données environnementales
                    <sup id={styles.datasetsCount}>&nbsp;({datasetsCount})</sup>
                </h4>
            ) :
            (
                <h4>
                    Jeux de données trouvées pour <span className={utilStyles.highlight}>{searchResults}</span>
                    <sup id={styles.datasetsCount}>&nbsp;({datasetsCount})</sup>
                </h4>
            )
    }

    return (
        <section id={styles.filtersBoardContainer} className={utilStyles.boxShadow}>
            <Container spacing={"p-4w"}>
                <Row>
                    {generateTitle(datasetsCount)}
                </Row>
                <Row>
                    <Col n={"12"} spacing="p-4w">
                        <SearchBar />
                    </Col>
                </Row>
                <Filters allFilters={allFilters} />
            </Container>
        </section >
    );
};

export default SearchBoard;