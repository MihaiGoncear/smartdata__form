import React from 'react';

export function Input({htmlFor, label, type, placeholder, HandleChangeInput}) {

    
    return (
        <div className='form__component'>
            <label htmlFor={htmlFor}>{label}</label>
            <input onChange={HandleChangeInput} placeholder={placeholder} type={type} id={htmlFor} name={htmlFor} />
        </div>
    )
}