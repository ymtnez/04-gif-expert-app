import React, { useState } from 'react'

export const AddCategory = () => {
    //En useSatate() puede haber un string, arreglo o objeto, etc
    const [inputValue, setInputValue] = useState('Hola Mundo');
    
    const handleInputChange = (evento) => {
        setInputValue(evento.target.value);
    }

    const handleSubmit = (evento) => {
        evento.preventDefault();
        console.log(inputValue); 
    };
   
    return (
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
  );
};