import { Checkbox, CheckboxGroup, Col, Row, Toggle } from '@dataesr/react-dsfr';
import Select from '../inputs/Select';
import { useState } from 'react';
import { getServerSideProps } from '../../pages/catalogue';

const Filters = ({ allFilters }) => {

    const [body, setBody] = useState({
        organizations: [],
        dataset_type: "",
        environment: [],
        is_opendata: undefined,
        downloadable: undefined,
        is_geospatial_data: undefined
    });

    const handleChange = (value, inputName) => {
        console.log(inputName + ": " + value);

        switch (inputName) {
            case "organizations":
                setBody({ ...body, organizations: [...body.organizations, value] })
                break;
            case "dataset_type":
                setBody({ ...body, dataset_type: value })
                break;
            case "environment":
                if (body.environment.includes(value)) {
                    setBody({
                        ...body,
                        environment: body.environment.filter(
                            (env) => env !== value)
                    })
                } else {
                    setBody({ ...body, environment: [...body.environment, value] })
                }
                break;
            case "is_opendata":
                setBody({ ...body, is_opendata: value })
                break;
            case "downloadable":
                setBody({ ...body, downloadable: value })
                break;
            case "is_geospatial_data":
                setBody({ ...body, is_geospatial_data: value })
                break;
            default:
                console.log("This input name is unknown")
        }
    }

    const cleanBody = () => {
        // make a function to clear all empty or undefined fields from body
    }

    const seeBody = () => {
        console.log(body);
    }

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


    const [checked, setChecked] = useState(false);

    const buildToggleFilter = (input) => {
        return (
            <Toggle
                checked={checked}
                onChange={() => {
                    setChecked(!checked);
                    handleChange(!checked, input.name)
                }
                }
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
                        onChange={(e) => { handleChange(e.target.value, input.name) }}
                        value={inputValue}
                    />
                ))}
            </CheckboxGroup>
        )
    }

    const buildSelectFilter = (input) => {
        const options = input.values.map(inputValue => (
            {
                label: inputValue,
                value: inputValue
            }
        ))
        return (
            <Select
                label={input.label}
                options={options}
                onChange={(e) => { handleChange(e.target.value, input.name) }}
            />
        )
    }

    return (
        <>
            {displayLayout(allFilters)}
            <div onClick={() => seeBody()}>See</div>
        </>
    );
};

export default Filters;