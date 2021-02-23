import React from 'react';

export function Slider({label, id}) {
    return (
        <div className="slider">
            <div className="input__slider">
                <input type="checkbox" id={id} className="checkbox" /> 
                <label htmlFor={id} className="toggle"></label> 
            </div>
            <span>{label}</span>
        </div>
    )
}