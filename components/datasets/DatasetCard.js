import { Col, Container, Row, Text } from '@dataesr/react-dsfr';
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';
import { displayWordsWithPipes } from '../../lib/utils';

import styles from './DatasetCard.module.css';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import { LANGUAGE } from '../../dictionnary/temporary';

const DatasetCard = ({ dataset }) => {

    const displayAllOrganizationsNames = (organizations) => {
        const names = organizations.map(org => {
            return org ? org[LANGUAGE].name : "-"
        });
        return names;
    }

    return (
        <Container className={`${utilStyles.boxShadow} ${utilStyles.noHorizontalPadding}`} spacing="my-8w">
            <Row className={styles.cardHead} spacing="px-4w py-2w">
                <Col n={"10"}>
                    <Row>
                        <h4>{dataset.name}</h4>
                    </Row>
                    <Row>
                        <Col>{displayAllOrganizationsNames(dataset.organizations)}</Col>
                        <Col n={"10"}>{displayWordsWithPipes([dataset.is_opendata ? "Données ouvertes" : "Données non ouvertes",
                        dataset.downloadable ? "Téléchargeable en ligne" : "Non téléchargeable en ligne"])}
                        </Col>
                    </Row>
                </Col>
                <Col className={utilStyles.textAlignRight}>
                    {/* Icons in dataesr/dsfr are pretty broken for now, so we use remixicon directly instead */}
                    <Link href="" >
                        <a className={utilStyles.noBoxShadow}>
                            <ArrowRightLineIcon size={38} className={utilStyles.blueFrance} />
                        </a>
                    </Link>
                </Col>
            </Row>
            <Row spacing={"p-4w"}>
                <Col n={"5"} spacing={"mr-6w"}>
                    <Row spacing={"mb-4w"}><span className={utilStyles.bold}>Milieux</span>&nbsp;:&nbsp;{displayWordsWithPipes(dataset.environment)}</Row>
                    <Row className={styles.description}>{dataset.description}</Row>
                </Col>
                <Col n={"4"} className={styles.data} >
                    <DatasetCardElement label={"Couverture spatiale"} data={dataset.geographical_geospatial_coverage} />
                    <DatasetCardElement label={"Granularité de la couverture spatiale"} data={displayWordsWithPipes(dataset.geographical_information_level)} />
                    <DatasetCardElement label={"Données géospatialisées"} data={dataset.is_geospatial_data ? "Oui" : "Non"} />
                </Col>
                <Col>
                    <DatasetCardElement label={"Couverture temporelle"} data={`${dataset.year_start} - ${dataset.year_end}`} />
                    <DatasetCardElement label={"Pas de temps"} data={dataset.temporal_scale != "N/A" ? dataset.temporal_scale : "-"} />
                </Col>
            </Row>

        </Container >
    );
};

const DatasetCardElement = ({ label, data }) => {
    return (
        <div className={styles.dataElement}>
            <Text className={utilStyles.bold} spacing={"m-0"}>{label}</Text>
            <Text spacing={"m-0"}>{data}</Text>
        </div>
    );
};

export default DatasetCard;

