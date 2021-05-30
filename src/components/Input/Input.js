import classes from './Input.module.css'

const Input = ({direction,change,value,alert}) => {

     let label = 'Enter binary number';
     let placeholder = 'Enter max 8 binary numbers...';
     
     if(!direction) {
        label = 'Enter decimal number'
        placeholder = 'Enter max 8 decimal numbers...';
     } 
    
    return (
        <div className="form__input-container">
            <label htmlFor="number-input" className={classes['form__input-label']}>{label}</label>
            <input
                type="text"
                id="number-input"
                className={classes['form__input']}
                maxLength="8"
                placeholder={placeholder}
                onChange={change}
                value={value}
            />
            <small className={alert ? [classes.alert,classes.active].join(" ") : classes.alert}>Please enter only binary numbers</small>
        </div>
    )
}

export default Input;