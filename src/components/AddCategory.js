import React, { useState } from 'react'
import PropTypes from 'prop-types'


/**
 * desestructuramos lo que viene en las propertis, 
 * -) setCateg es la properti que recibo desde GifExpertApp y que ademas su valor
 * es la funcion setCategorias encargada de mudar el estado del arreglo
 * categorias.  
 * -) categ lo que trae es el arreglo, el cual pasara por diferentes estados.
 * Si no deseamos desestructurar las propertis 
 * (ejemplo: export const AddCategory = ( props ) => {...} )
 * entonces tendriamos que hacer como sigue a la hora de insertar una categoria:
 *  props.setCateg( new_categ  => [...new_categ, inputValue] );
 */
export const AddCategory = ({ setCateg, categ }) => {
    //En useSatate() puede haber un string, arreglo o objeto, etc
    const [inputValue, setInputValue] = useState('');
    
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
        if ( inputValue.trim().length > 2 ) {
            //Puede ser asi tambien:
            setCateg( categorias => [ ...categorias, inputValue ]);
            //setCateg([...categ, inputValue]);
            setInputValue(''); 
        }       
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

AddCategory.propTypes = {
    setCateg: PropTypes.func.isRequired,
    categ: PropTypes.array.isRequired
};
