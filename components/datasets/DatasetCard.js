import { Col, Container, Row, Text } from '@dataesr/react-dsfr';
import { displayWordsWithPipes } from '../../lib/utils';

import styles from './DatasetCard.module.css';

const DatasetCard = ({ dataset }) => {

    /**
     * ! Temporary
     */
    const language = "fr";

    const displayAllOrganizationsNames = (organizations) => {
        const names = organizations.map(org => {
            return org ? org[language].name : "-"
        });
        return names;
    }

    return (
        <Container>
            <Row className={styles.cardHead} spacing="px-4w py-2w">
                <Col>
                    <Row>
                        <h4>{dataset.name}</h4>
                    </Row>
                    <Row>
                        <Col>{displayAllOrganizationsNames(dataset.organizations)}</Col>
                        <Col>{displayWordsWithPipes([dataset.is_opendata ? "Données ouvertes" : "Données non ouvertes",
                        dataset.downloadable ? "Téléchargeable en ligne" : "Non téléchargeable en ligne"])}

                        </Col>
                    </Row>
                </Col>
                <Col>-></Col>
            </Row>
            <Row>
                <Col>
                    <Row>Milieux&nbsp;:&nbsp;{displayWordsWithPipes(dataset.environment)}</Row>
                    <Row className={styles.description}>{dataset.description}</Row>
                </Col>
                <Col className={styles.data}>
                    <DatasetCardElement label={"Couverture spatiale"} data={"bibibi"} />
                    <DatasetCardElement label={"Granularité de la couverture spatiale"} data={"blabla"} />
                    <DatasetCardElement label={"Données géospatialisées"} data={"blabla"} />
                </Col>
                <Col>
                    <DatasetCardElement label={"Couverture temporelle"} data={"blabla"} />
                    <DatasetCardElement label={"Pas de temps"} data={dataset.temporal_scale != "N/A" ? dataset.temporal_scale : "-"} />
                </Col>
            </Row>

        </Container >
    );
};

const DatasetCardElement = ({ label, data }) => {
    return (
        <>
            <Text>{label}</Text>
            <Text spacing={"m-0"}>{data}</Text>
        </>
    );
};

export default DatasetCard;

