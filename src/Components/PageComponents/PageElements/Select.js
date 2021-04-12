import React from 'react';
import { v4 as uuidv4 } from 'uuid';


export function Select({arr, HandleChangeInput, test}){
    
    return(
        <div className="form__component">
            <label htmlFor={arr.htmlFor}>{arr.label}</label>
            <select onChange={HandleChangeInput} id={arr.htmlFor} name={arr.htmlFor}>
                { arr.options.map(item => 
                    <option key={item.id} value={item.value}>{item.label}</option>
                )}
            </select>
        </div>
    )
}