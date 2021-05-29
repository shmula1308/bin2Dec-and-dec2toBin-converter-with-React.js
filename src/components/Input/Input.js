import classes from './Input.module.css'

const Input = (props) => {

     let label = 'Enter binary number';
     let placeholder = 'Enter max 8 binary numbers...';
     
     if(!props.direction) {
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
                onChange={props.change}
                value={props.value}
            />
            <small className={props.alert ? [classes.alert,classes.active].join(" ") : classes.alert}>Please enter only binary numbers</small>
        </div>
    )
}

export default Input;