import React from 'react';
import classes from './Select.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'


const Select = (props) => {

    let binary = 'Binary';
    let decimal = 'Decimal';
        
    return (
            <div className={classes['form__select-container']}>
                <FontAwesomeIcon icon={faSortDown} className={classes["form__select-icon"]}/>
                    <label htmlFor="binToDec" className={classes["form__select-label"]}>{props.label}</label>
                    <select 
                    className={classes.form__select} 
                    onChange={props.change}
                    value={props.value}
                    id={props.id}>
                        <option 
                        value="binary" 
                        selected={props.binary}>
                        {binary}
                        </option>
                        <option value="decimal" 
                        selected={props.decimal}>
                        {decimal}
                        </option>
                    </select>
            </div>
            )
}

export default Select;