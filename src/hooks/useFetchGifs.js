import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( categ ) => {
  
    const [state, setState] = useState(
        {
            data_img: [],
            loading: true
        }
    )
    
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
    // useEffect(() => {
    //     getGifs( categ )
    //         .then( setImages );
    // }, [ categ ]);

    useEffect(() => {
        
        getGifs( categ )
            .then( arr_obj_gifs => {
                setTimeout( () => {
                    
                    setState({
                        data_img: arr_obj_gifs,
                        loading: false //En false para indicar que termino de cargar
                    }) 

                }, 1500);
            })

    }, [ categ ])
    
    
    return state;
}
