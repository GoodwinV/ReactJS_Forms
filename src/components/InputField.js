import React from 'react';

function InputField(props) {
    const { id, label, type, value, onChange, required } = props;

    return (
        <div className={"form__group" + (required ? ' required' : '')}>
            <label className="form__label" htmlFor={id}>{label}</label>
            <input
                type={type}
                className="form-control"
                id={id}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default InputField;