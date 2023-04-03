import React from 'react'

export const GifGrid = ({ categ }) => {

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=Ns1IgnDyFXIpSxgiZSOj9RTSj4vDOCt3';
        const resp = await fetch(url);
        const datos = await resp.json();

        //console.log(datos);
    }

   //getGifs();


    return (
        <div>
            <h3>{ categ }</h3>  
        </div>
    )
}
