import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import React, { useEffect, useState } from 'react'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categ }) => {    

    const { data_img, loading } = useFetchGifs( categ );
    
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ categ }</h3>
            {/* <h3>{ loading ? 'Done..' : 'Wait...' }</h3> */}
            { loading && <p className='animate__animated animate__flash'>Cargando...</p> }
            <div className='card-grid'>
                {/* <ol>
                    {
                        //
                        // Pudiera ser 
                        //    images.map( elem => <li key={ elem.id }>{ elem.title }</li> )
                        // pero el array images es un arreglo de objetos donde sus artibutos
                        // son id, title y url por lo que si desestructuramos quedaria mas
                        // limpio el codigo. 
                            
                        images.map( ({ id, title }) => (
                            <li key={ id }>{ title }</li>
                        ))
                    }
                </ol> */}
                {
                    data_img.map( (imagen) => (
                        <GifGridItem
                            key={imagen.id}
                            /*
                             * Imagen es un objeto y utilizando el operador spread
                             * podemos hacer {...imagen}, esto nos permite enviar
                             * como properties independientes a cada uno de los 
                             * atributos, campos o propiedades hacia el componente
                             * que lo reciba.
                             */
                            { ...imagen }
                        />
                    ))   
                } 
            </div>
        </>
    )
}
