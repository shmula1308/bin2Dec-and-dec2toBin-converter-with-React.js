import React from 'react';
import classes from './Select.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown} from '@fortawesome/free-solid-svg-icons'


const Select = () => {
    
    return (
        <div className={classes['form__select-component']}>
            <div className={classes['form__select-container']}>
            <FontAwesomeIcon icon={faSortDown} className={classes["form__select-icon"]}/>
                <label htmlFor="binToDec" className={classes["form__select-label"]}>From</label>
                <select id="binToDec" className={classes.form__select}>
                    <option value="binary">Binary</option>
                    <option value="decimal">Decimal</option>
                </select>
            </div>
            <div className={classes['form__select-container']}>
                <FontAwesomeIcon icon={faSortDown} className={classes["form__select-icon"]}/>
                <label htmlFor="decToBin" className={classes["form__select-label"]}>To</label>
                <select id="decToBin" className={classes.form__select}>
                    <option value="decimal">Decimal</option>
                    <option value="binary">Binary</option>
                </select>
            </div>
        </div>
    )
}

export default Select;