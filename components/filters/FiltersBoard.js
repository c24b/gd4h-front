import { Checkbox, CheckboxGroup, Col, Container, Radio, RadioGroup, Row, SearchBar, Select } from '@dataesr/react-dsfr';
import utilStyles from '../../styles/utils.module.css';
import styles from './FiltersBoard.module.css';

const FiltersBoard = ({ datasetsCount, allFilters }) => {

    const chooseInput = (input) => {
        if (input.is_bool) {
            return buildRadioInput(input)
        }
        if (input.is_multiple && !temporaryPatch(input.name)) {
            return buildCheckboxInput(input)
        } else {
            return buildSelectInput(input)
        }
    }

    /**
     * ! We force organizations to be displayed as a select input
     * ! because it's a very long list, but it should actually be
     * ! a checklist 
     */
    const temporaryPatch = (name) => {
        return name === "organizations"
    }

    const buildRadioInput = (input) => {
        return (
            <RadioGroup
                legend={input.label}
            >{input.values.map(inputValue => (
                <Radio
                    label={inputValue ? 'Oui' : 'Non'}
                    value={inputValue}
                />
            ))}
            </RadioGroup>
        )
    }

    const buildCheckboxInput = (input) => {
        return (
            <CheckboxGroup legend={input.label}>
                {input.values.map(inputValue => (
                    <Checkbox
                        label={inputValue}
                        onChange={() => { }}
                        value={inputValue}
                    />
                ))}
            </CheckboxGroup>
        )
    }

    const buildSelectInput = (input) => {
        const options = input.values.map(inputValue => (
            {
                value: inputValue,
                label: inputValue
            }
        ))
        return (
            <Select
                label={input.label}
                options={options}
            />
        )
    }

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

                {allFilters && allFilters.map((filter) => <Row>{chooseInput(filter)}</Row>)}
                <Col></Col>
                <Col></Col>

                <Row></Row>
                <Row></Row>
                <Row></Row>
            </Container>
        </section>
    );
};

export default FiltersBoard;