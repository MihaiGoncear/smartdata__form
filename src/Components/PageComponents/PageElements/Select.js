import React from 'react';

export function Select({arr}){
    
    return(
        <div className="info">
            <label htmlFor={arr.htmlFor}>{arr.label}</label>
            <select id={arr.htmlFor} name={arr.htmlFor}>
                { arr.options.map(item => 
                    <option value={item.value}>{item.label}</option>
                )}
            </select>
        </div>
    )
}