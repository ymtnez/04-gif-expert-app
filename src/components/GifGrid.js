import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categ }) => {    
    
    /**
     * Si no utilizamos useEffect, entonces por ejemplo en el caso que queramos
     * utilizar el hook de useState para cambiar el counter mediante el evento
     * onClick del boton se va ejecutar todo la peticion http, o lo que es lo 
     * mismo, React detecta un cambio en el componente (cambio el counter) y
     * vuelve a ejecutar todo el codigo.
            const [counter, setCounter] = useState(0);
            .
            .
            .
            return (
                <div>
                    <h1>{ counter }</h1>
                    <button onClick={ () => setCounter( counter + 1 ) }>Click</button>
                    <h3>{ categ }</h3>  
                </div>
    )
    */
    
    //Utilizando el hook useState
    const [images, setImages] = useState([]);
    
   /**
    * Aqui estamos utilizando otro hook (useEffect) para indicarle a React
    * que ejecute getGifs() solo una vez aun si detecta un cambio. Y solo
    * una vez pues en el segundo argumento pasamos el array vacio. 
    * 
    * La linea .then( setImages ); se dedujo de:
    *       .then( imagenes => setImages( imagenes ) ); pues si en una funcion de
    * callback su primer y unico es igual al argumento que recibe la funcion interna,
    * entonces podemos reducirla.
    */
    useEffect(() => {
        getGifs( categ )
            .then( setImages );
    }, [ categ ]);
   
    return (
        <>
            <h3>{ categ }</h3>
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
                    images.map( (imagen) => (
                        <GifGridItem
                            key={imagen.id}
                            /**
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
