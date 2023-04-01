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
        <AddCategory />
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

