import React from 'react';
import { GetInfoFromLocalStorage } from '../../Functions/GetInfoFromLocalStorage'
let localStorage = GetInfoFromLocalStorage()


export function ResultInput({inputInfo, label}) {

    
    return (
        
            localStorage 
            ? <div className='form__component'>
                <p className='label'>{label}</p>
                <p className="input_value">{localStorage[inputInfo] ? localStorage[inputInfo] : '-'}</p>
            </div> 
            : null
        
    )
}