import styles from '../styles/catalogue.module.css'
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import {
    Container,
    Row,
    Col,
    Text
} from '@dataesr/react-dsfr';
import FiltersBoard from '../components/filters/FiltersBoard';
import { howManyJsonElements } from '../lib/utils'

const Catalogue = ({ allDatasets, allFilters }) => {

    const filters = (filters) => {
        console.log(filters);
        return filters;
    }

    return (
        <Layout>
            <Head>
                <title>Green Data For Health | Catalogue</title>
            </Head>
            <Container>
                <Row spacing="mt-6w">
                    <Col>
                        <h1>Catalogue</h1>
                        <Text side="md" className={styles.subtitle}>des jeux de données environnementales destinés à un usage en santé-environnement</Text>
                    </Col>
                    <Col className={styles.lastUpdateContainer}>
                        <Text size="sm" className={styles.lastUpdate}>Dernière mise à jour du catalogue du Green Data for Health</Text>
                        <Text size="sm">07/02/2022</Text>
                    </Col>
                </Row>
                <Row spacing={"my-8w"}>
                    <FiltersBoard datasetsCount={howManyJsonElements(allDatasets)} allFilters={allFilters} />
                </Row>
                {allDatasets.map((dataset) => <DatasetCard dataset={dataset} />)}
            </Container>
        </Layout>
    );
};

export default Catalogue;

import { getAllDatasets } from '../lib/datasets.js'
import { getAllFilters } from '../lib/filters';
import DatasetCard from '../components/datasets/DatasetCard';

export async function getServerSideProps() {
    const allDatasets = await getAllDatasets()
    const allFilters = await getAllFilters()
    return {
        props: {
            allDatasets,
            allFilters
        }
    }
}