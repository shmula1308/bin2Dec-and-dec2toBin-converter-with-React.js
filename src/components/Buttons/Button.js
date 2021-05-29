import React from 'react';
import classes from './Button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Button = (props) => {

   const assignedClasses = [];
   if(props.title !== 'Convert') {
    assignedClasses.push(classes.btn)
   } else {
    assignedClasses.push(classes.btn, classes['btn__primary'])
   }
    return (
            <button 
                type="button" 
                className={assignedClasses.join(' ')}
                id="convert"
                onClick={props.click}
                >
                <FontAwesomeIcon icon={props.icon} className={classes["btn__icon"]}/>
                {props.title}
            </button>
    )
}

export default Button;