import React from 'react';
import './ResultBox.css';

const ResultBox = (props) => {
    

    return (
        <div className="result">
            <label htmlFor="result" className="result__label"
            >{props.change ? 'Decimal Number' : 'Binary Number'}</label>
            <div className="result__container">
                 <p className="result__number"></p>
            </div>
        </div>
        
    )
}

export default ResultBox;