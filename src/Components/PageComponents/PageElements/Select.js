import React from 'react';
import { v4 as uuidv4 } from 'uuid';


export function Select({arr}){
    
    return(
        <div className="form__component">
            <label htmlFor={arr.htmlFor}>{arr.label}</label>
            <select id={arr.htmlFor} name={arr.htmlFor}>
                { arr.options.map(item => 
                    <option key={uuidv4()} value={item.value}>{item.label}</option>
                )}
            </select>
        </div>
    )
}