import React from 'react';
import classes from './Select.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'


const Select = (props) => {

    let binary = 'Binary';
    let decimal = 'Decimal';
    
    if(!props.change) {
        binary = "Decimal"
        decimal = 'Binary'
    }

    const unitChangeHandler = (ev) => {
        if(ev.target.id === 'from' && ev.target.value === 'decimal') {
            document.getElementById('to')[1].selected = true;
        }
        if(ev.target.id === 'from' && ev.target.value === 'binary') {
            document.getElementById('to')[0].selected = true;
        }

        if(ev.target.id === 'to' && ev.target.value === 'binary') {
            document.getElementById('from')[1].selected = true;
        }
        if(ev.target.id === 'to' && ev.target.value === 'decimal') {
            document.getElementById('from')[0].selected = true;
        }
    }
    
    return (
        <div className={classes['form__select-component']}>
            <div className={classes['form__select-container']}>
            <FontAwesomeIcon icon={faSortDown} className={classes["form__select-icon"]}/>
                <label htmlFor="binToDec" className={classes["form__select-label"]}>From</label>
                <select id="from" 
                className={classes.form__select} onChange={unitChangeHandler}>
                    <option value="binary">{binary}</option>
                    <option value="decimal">{decimal}</option>
                </select>
            </div>
            <div className={classes['form__select-container']}>
                <FontAwesomeIcon icon={faSortDown} className={classes["form__select-icon"]}/>
                <label htmlFor="decToBin" className={classes["form__select-label"]}>To</label>
                <select id="to" className={classes.form__select} onChange={unitChangeHandler}>
                    <option value="decimal">{decimal}</option>
                    <option value="binary">{binary}</option>
                </select>
            </div>
        </div>
    )
}

export default Select;