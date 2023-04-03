import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    /**
     * Aqui usamos el hook de useState el cual nos permitira a traves de setCategorias
     * (es una funcion) insertar categorias, o sea, es a traves de setCategorias que
     * cambiaremos el estado a categorias
     */
    const [categorias, setCategorias] = useState(['One Punch']);
   
    // const handleAdd = () => {
    //     /**
    //      * Si qeremos que Hunter... este al inicio del arreglo
    //         setCategorias(['Hunter_X_Hunter', ...categorias]);
    //      * O pueder casi lo mismo hacerlo asi:
    //         setCategorias( (cat) => [...cat, 'New_Elem'] )
    //         */
    //     setCategorias([...categorias, 'Hunter_X_Hunter']);
    // };

    return (
    <>
        <h2>GifExpertApp</h2>
        {/* En este ejemplo le enviamos al componente AddCategory las property:
                1-) setCateg, la cual va a ser la funcion (setCategorias) que puede mutar
                    el estado del arreglo categorias, es decir, insertar, eliminar elementos
                2-) categ, es opcional pero para que sepamos que podemos enviar el arreglo.
            Por tanto, en una properti podemos enviar desde datos primitivos hasta arreglos,
            objetos y funciones.
        */}
        <AddCategory setCateg={ setCategorias } categ={ categorias } />
        <hr/>
        {/* <button onClick={ handleAdd }>Agregar</button> */}
        <ol>
            {
                /**
                 * NO es buena practica usar el indice del areglo
                 * del map para referenciar cada elemento, para
                 * ello debe ser la clave que venga de la BD.
                 */
                categorias.map( categ => 
                    <GifGrid
                        key={ categ }
                        categ={ categ }/>     
                )
            }
        </ol>
    </>
  )
};

