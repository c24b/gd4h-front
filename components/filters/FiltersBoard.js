import { Checkbox, CheckboxGroup, Col, Container, Radio, RadioGroup, Row, SearchBar, Select, Toggle } from '@dataesr/react-dsfr';
import { useState } from 'react';
import utilStyles from '../../styles/utils.module.css';
import styles from './FiltersBoard.module.css';

const FiltersBoard = ({ datasetsCount, allFilters }) => {

    const displayLayout = (allFilters) => {
        const { toggleFilters, checkboxFilters, selectFilters } = organizeLayout(allFilters);
        return (
            <Row>
                <Col spacing={"p-4w"} n={"8"}>
                    <Row spacing={"mb-6w"}>
                        <Col>
                            {selectFilters.map(input => <>{input}</>)}
                        </Col>
                    </Row>
                    <Row className={utilStyles.noWrap}>
                        <Col>
                            {toggleFilters.map(input => <>{input}</>)}
                        </Col>
                    </Row>
                </Col>
                <Col spacing={"p-4w"}>
                    {checkboxFilters.map(input => <>{input}</>)}
                </Col>
            </Row>
        )
    }

    const organizeLayout = (allFilters) => {
        const toggleFilters = [];
        const checkboxFilters = [];
        const selectFilters = [];

        if (allFilters) {
            allFilters.forEach(filter => {
                if (filter.is_bool) {
                    toggleFilters.push(buildToggleInput(filter))
                } else if (filter.is_multiple && !temporaryPatch(filter.name)) {
                    checkboxFilters.push(buildCheckboxInput(filter))
                } else {
                    selectFilters.push(buildSelectInput(filter))
                }
            })
            return (
                {
                    toggleFilters,
                    checkboxFilters,
                    selectFilters
                }
            )
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


    const [checked, setCheched] = useState(false);

    const buildToggleInput = (input) => {
        return (
            <Toggle
                checked={checked}
                onChange={() => setCheched(!checked)}
                label={input.label}

            />)
    }

    // const buildRadioInput = (input) => {
    //     return (
    //         <RadioGroup
    //             legend={input.label}
    //         >{input.values.map(inputValue => (
    //             <Radio
    //                 label={inputValue ? 'Oui' : 'Non'}
    //                 value={inputValue}
    //             />
    //         ))}
    //         </RadioGroup>
    //     )
    // }

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
            <Container spacing={"p-4w"}>
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
                {displayLayout(allFilters)}
            </Container>
        </section >
    );
};

export default FiltersBoard;