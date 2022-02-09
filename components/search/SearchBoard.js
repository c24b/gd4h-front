import { useState } from 'react';
import { Checkbox, CheckboxGroup, Col, Container, Radio, RadioGroup, Row, Select, Toggle } from '@dataesr/react-dsfr';
import SearchBar from './SearchBar';
import utilStyles from '../../styles/utils.module.css';
import styles from './SearchBoard.module.css';
import Filters from '../filters/Filters';
import { SearchResultsContext } from '../../context/SearchResultsProvider';
import { useContext } from 'react';

const SearchBoard = ({ datasetsCount, allFilters }) => {

    const searchResults = useContext(SearchResultsContext);

    return (
        <section id={styles.filtersBoardContainer} className={utilStyles.boxShadow}>
            <Container spacing={"p-4w"}>
                <Row>
                    <h4>
                        Jeux de données environnementales
                        <sup id={styles.datasetsCount}>&nbsp;({datasetsCount})</sup>
                    </h4>
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