import { Checkbox, CheckboxGroup, Col, Row, Select, Toggle } from '@dataesr/react-dsfr';
import { useState } from 'react';

const Filters = ({ allFilters }) => {

    // ========================================
    // ======== Filters layout: start =========
    // ========================================

    const displayLayout = (allFilters) => {
        const {
            toggleFilters,
            checkboxFilters,
            selectFilters
        } = organizeLayout(allFilters);

        return (
            <Row>
                <Col spacing={"p-4w"} n={"8"}>
                    <Row spacing={"mb-6w"}>
                        <Col>
                            {selectFilters.map(filter => <>{filter}</>)}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {toggleFilters.map(filter => <>{filter}</>)}
                        </Col>
                    </Row>
                </Col>
                <Col spacing={"p-4w"}>
                    {checkboxFilters.map(filter => <>{filter}</>)}
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
                    toggleFilters.push(buildToggleFilter(filter))
                } else if (filter.is_multiple && !temporaryPatch(filter.name)) {
                    checkboxFilters.push(buildCheckboxFilter(filter))
                } else {
                    selectFilters.push(buildSelectFilter(filter))
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

    const buildToggleFilter = (input) => {
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

    const buildCheckboxFilter = (input) => {
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

    const buildSelectFilter = (input) => {
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

    // ========================================
    // ======== Filters layout: end ===========
    // ========================================

    return (
        <>
            {displayLayout(allFilters)}
        </>
    );
};

export default Filters;