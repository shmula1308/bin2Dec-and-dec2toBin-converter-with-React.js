const Input = () => {
    return (
        <div className="form__input-container">
            <label htmlFor="number-input" className="form__input-label">Enter binary number</label>
            <input
                type="text"
                id="number-input"
                className="form__input"
                maxLength="8"
                placeholder="Enter max 8 binary numbers..."
            />
        </div>
    )
}

export default Input;