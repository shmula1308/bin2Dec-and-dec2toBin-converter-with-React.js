import React from 'react';

const Buttons = () => {
    return (
        <div className="form__buttons-container">
            <button 
                type="button" 
                className="btn btn--primary" 
                id="convert">
                <i className="fas fa-sync btn__icon"></i>
                Convert
            </button>
            <button 
                type="reset" 
                className="btn btn--secondary" 
                id="reset">
                <i className="fas fa-times btn__icon"></i>
                Reset
            </button>
            <button 
                type="button" 
                className="btn btn--tertiary" 
                id="swap">
                <i className="fas fa-retweet btn__icon"></i>
                Swap
            </button>
        </div>
    )
}

export default Buttons;