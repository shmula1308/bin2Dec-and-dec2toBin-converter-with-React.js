import React from 'react';
import classes from './Select.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'


const Select = ({label,change,value,id,binary,decimal}) => {

    let bin = 'Binary';
    let dec = 'Decimal';
        
    return (
            <div className={classes['form__select-container']}>
                <FontAwesomeIcon icon={faSortDown} className={classes["form__select-icon"]}/>
                    <label htmlFor="binToDec" className={classes["form__select-label"]}>{label}</label>
                    <select 
                    className={classes.form__select} 
                    onChange={change}
                    value={value}
                    id={id}>
                        <option 
                        value="binary" 
                        selected={binary}>
                        {bin}
                        </option>
                        <option value="decimal" 
                        selected={decimal}>
                        {dec}
                        </option>
                    </select>
            </div>
            )
}

export default Select;