import React from 'react';

const Select = ({ label, options, onChange }) => {
    return (
        <div class="fr-select-group">
            <label class="fr-label" for="select">
                {label}
            </label>
            <select class="fr-select" id="select" name="select" onChange={(e) => onChange(e)}>
                {
                    options.map(option => <option value={option.value}>{option.label}</option>)
                }
            </select>
        </div>
    );
};

export default Select;