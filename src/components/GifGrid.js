import React, { useEffect, useState } from 'react'
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
    */
    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async() => {

        const apiKey = 'Ns1IgnDyFXIpSxgiZSOj9RTSj4vDOCt3';
        const url = `https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=${apiKey}`;
        
        const resp     = await fetch(url);
        const { data } = await resp.json();

        /**
         * Pudiera ser asi, desestructurando el objeto y accediendo a los atributos que me 
         * interesan
                const gifs = data.map( ({id, title, images:{downsized_medium}}) => {...
         * Utilizo map para obtener un nuevo array de objetos con los atributos que solo me
         * interesan. Este metodo va a analizar cada elemento del array que viene en data y
         * como dichos elementos son objetos, entonces vamos a aceder a cada uno de esos
         * objetos por img. Es decir, map recibe una función que en su argumento tendrá cada
         * uno de los elementos del array a mapear y a cada uno le aplicará el cuerpo de la
         * funcion.
         * 
         */
        const gifs = data.map( (img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url //El signo ? es para si vienen las imganes lo utilice
            }    
        });

        setImages( gifs );
    }
   
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
