import React from 'react';
import { v4 as uuidv4 } from 'uuid';


export function Slider({ label, id }) {
    return (
        <div className="slider">
            <div className="input__slider">
                <input type="checkbox" id={id} className="checkbox" />
                <label htmlFor={id} className="toggle"></label>
            </div>
            <span key={uuidv4()} >{label}</span>
        </div>
    )
}