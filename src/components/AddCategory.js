import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('') //le ponemos comillas pa que sea que sea string
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats ]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Busca tu GIF aqui"
            
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired //Esta funcion es requerida como parametro en AddCategory
}