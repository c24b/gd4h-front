import { Col, Container, Row, SearchBar } from '@dataesr/react-dsfr';
import utilStyles from '../../styles/utils.module.css';
import styles from './FiltersBoard.module.css';

const FiltersBoard = () => {
    return (
        <section id={styles.filtersBoardContainer} className={utilStyles.boxShadow}>
            <Container>
                <Row><h4>Jeux de données environnementales</h4></Row>
                <Row>
                    <Col n="12">
                        <SearchBar
                            onSearch={() => { }}
                            label="Searchbar Label"
                            placeholder="Rechercher"
                            buttonLabel="Search button"
                        />
                    </Col>
                    <Col></Col>
                </Row>
                <Row></Row>
                <Row></Row>
                <Row></Row>
                <Row></Row>
            </Container>
        </section>
    );
};

export default FiltersBoard;