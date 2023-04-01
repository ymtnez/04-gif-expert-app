import React, { useState } from 'react'

/**
 * desestructuramos lo que viene en las propertis, 
 * -) setCateg es la properti que recibo desde GifExpertApp y que ademas su valor
 * es la funcion setCategorias encargada de mudar el estado del arreglo
 * categorias.  
 * -) categ lo que trae es el arreglo, el cual pasara por diferentes estados.
 *  
 */
export const AddCategory = ({ setCateg, categ }) => {
    //En useSatate() puede haber un string, arreglo o objeto, etc
    const [inputValue, setInputValue] = useState('Hola Mundo');
    
    const handleInputChange = (evento) => {
        setInputValue(evento.target.value);
    }

    const handleSubmit = (evento) => {
        evento.preventDefault();
        /**
         * setCateg puede o no tener una funcion de callback donde el 1er argumento 
         * (categorias) es el valor del estado anterior y regresa (=>) el nuevo estado
         * ([ ...categorias, inputValue ]) que lo que hace es agregar el valor de la
         * variable inputValue al final del arreglo "categorias"
         */ 
        //Pudier ser asi tambien:
        setCateg([ ...categ, inputValue ]) 
        //setCateg( categorias => [ ...categorias, inputValue ]);
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