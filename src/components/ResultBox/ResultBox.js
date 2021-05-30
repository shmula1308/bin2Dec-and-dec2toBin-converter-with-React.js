import React from 'react';
import './ResultBox.css';

const ResultBox = ({direction,result}) => {

    return (
        <div className="result">
            <label htmlFor="result" className="result__label"
            >{direction ? 'Decimal Number' : 'Binary Number'}</label>
            <div className="result__container">
                 <p className="result__number">{result}</p>
            </div>
        </div>  
    )
}

export default ResultBox;