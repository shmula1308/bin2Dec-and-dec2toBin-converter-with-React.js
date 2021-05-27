import React from 'react';
import Select from './Select/Select'
import Input from './Input/Input'
import Buttons from './Buttons/Buttons'
import ResultBox from './ResultBox/ResultBox'


const Form = () => {
    return (
        <div>
            <form className="form">
                <Select/>
                <Input/>
                <Buttons/>
                <ResultBox/>
            </form>
        </div>
    )
}

export default Form;