import { Col, Row, Text } from "@dataesr/react-dsfr";

import styles from './GenericError.module.css';

const GenericError = ({ message }) => {
    return (
        <Row justifyContent={"center"}>
            <Col n={"6"}>
                <Text spacing="mt-2w mb-8w" size="lg" className={styles.message}>{message}</Text>
            </Col>
        </Row>
    )
};

export default GenericError;