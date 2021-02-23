import React from 'react';

export function Input({htmlFor, label, type, placeholder}) {
    return (
        <div className='info'>
            <label htmlFor={htmlFor}>{label}</label>
            <input placeholder={placeholder} type={type} id={htmlFor} name={htmlFor} />
        </div>
    )
}