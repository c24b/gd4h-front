import styles from '../styles/catalogue.module.css'
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import {
    Container,
    Row,
    Col,
    Text
} from '@dataesr/react-dsfr';
import { useEffect } from 'react';
import DatasetCard from '../components/datasets/DatasetCard';
import SearchBoard from '../components/search/SearchBoard';
import { howManyJsonElements } from '../lib/utils'
import { DatasetsContext, DatasetsDispatchContext } from '../context/DatasetsProvider';
import { useContext } from 'react';
import { BASE_URL, DATASETS } from '../dictionnary/url';

const Catalogue = ({ allFilters }) => {

    const currentDatasets = useContext(DatasetsContext);
    const setCurrentDatasets = useContext(DatasetsDispatchContext);

    useEffect(() => {
        fetch(`${BASE_URL}/${DATASETS}`)
            .then((res) => res.json())
            .then((data) => {
                setCurrentDatasets(data)
            })
    }, [])

    const generateDatasetsCards = (allDatasets) => {
        return (
            allDatasets.map((dataset) => <DatasetCard dataset={dataset} key={dataset._id} />)
        )
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
                        <Text side="md" className={styles.subtitle}>
                            des jeux de données environnementales destinés à un usage en santé-environnement
                        </Text>
                    </Col>
                    <Col className={styles.lastUpdateContainer}>
                        <Text size="sm" className={styles.lastUpdate}>
                            Dernière mise à jour du catalogue du Green Data for Health
                        </Text>
                        <Text size="sm">{FAKE_DATE}</Text>
                    </Col>
                </Row>
                <Row spacing={"my-8w"}>
                    <SearchBoard
                        datasetsCount={howManyJsonElements(currentDatasets)} allFilters={allFilters}
                    />
                </Row>
                {currentDatasets.length !== 0 ?
                    generateDatasetsCards(currentDatasets) :
                    <GenericError message={NOT_FOUND} />
                }
            </Container>
        </Layout>
    );
};

export default Catalogue;

import { getAllFilters } from '../lib/filters';
import GenericError from '../components/errors/GenericError';
import { NOT_FOUND } from '../dictionnary/errors';import { CORS_ANYWHERE, FAKE_DATE } from '../dictionnary/temporary';

export const getServerSideProps = async () => {
    const allFilters = await getAllFilters();
    return {
        props: {
            allFilters
        }
    }
}