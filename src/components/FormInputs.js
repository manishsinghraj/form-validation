//FormatInput

import React, { useState } from 'react';
import './formInputs.css'

export const FormInputs = (props) => {
    const { label, onChange, errorMessage, id, ...inputProps } = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true)
    }

    return (
        <div className='formInputs'>
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)} onBlur={handleFocus} focused={focused.toString()}></input>
            <span>{errorMessage}</span>
        </div>
    )
}
