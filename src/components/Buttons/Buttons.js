import React from 'react';
import classes from './Buttons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Button = (props) => {

    
    
    return (
        
            <button 
                type="button" 
                className={[classes.btn, classes['btn__primary']].join(' ')}
                id="convert"
                onClick={props.click}
                >
                <FontAwesomeIcon icon={props.icon} className={classes["btn__icon"]}/>
                {props.title}
            </button>
    )
}

export default Button;