import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categorias, setCategorias] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
   
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
        <AddCategory setCateg={ setCategorias } categ={categorias}/>
        <hr/>
        {/* <button onClick={ handleAdd }>Agregar</button> */}
        <ol>
            {
                /**
                 * NO es buena practica usar el indice del areglo
                 *  del map para referenciar cada elemento, para
                 * ello debe ser la clave que venga de la BD.
                 */
                categorias.map( (categ, index) => {
                    return <li key={ index+1 }>{ categ }</li>;
                })
            }
        </ol>
    </>
  )
};
