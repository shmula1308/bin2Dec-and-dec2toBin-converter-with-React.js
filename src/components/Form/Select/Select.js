import React from 'react';

const Select = () => {
    return (
        <div>
            <div className="form__select-container">
                <i className="fas fa-sort-down form__select-icon"></i>
                <label htmlFor="binToDec" className="form__select-label">From</label>
                <select id="binToDec" className="form__select">
                    <option value="binary">Binary</option>
                    <option value="decimal">Decimal</option>
                </select>
            </div>
            <div className="form__select-container">
                <i className="fas fa-sort-down"></i>
                <label htmlFor="decToBin" className="form__select-label">To</label>
                <select id="decToBin" className="form__select">
                    <option value="decimal">Decimal</option>
                    <option value="binary">Binary</option>
                </select>
            </div>
        </div>
    )
}

export default Select;