import { Col, Container, Row, SearchBar } from '@dataesr/react-dsfr';
import utilStyles from '../../styles/utils.module.css';
import styles from './FiltersBoard.module.css';

const FiltersBoard = ({ datasetsCount }) => {
    return (
        <section id={styles.filtersBoardContainer} className={utilStyles.boxShadow}>
            <Container>
                <Row><h4>Jeux de données environnementales<sup id={styles.datasetsCount}>&nbsp;({datasetsCount})</sup></h4></Row>
                <Row>
                    <Col n="12" spacing="p-4w">
                        <SearchBar
                            onSearch={() => { }}
                            label="Searchbar Label"
                            placeholder="Rechercher"
                            buttonLabel="Search button"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                    <Col></Col>
                </Row>
                <Row></Row>
                <Row></Row>
                <Row></Row>
            </Container>
        </section>
    );
};

export default FiltersBoard;