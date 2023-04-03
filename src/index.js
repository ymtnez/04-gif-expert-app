import React from 'react';
import ReactDOM from 'react-dom'

import { GifExpertApp } from './GifExpertApp';

import './index.css';

ReactDOM.render(
  <GifExpertApp />,
  document.getElementById('root')
);

const getGifs = async() => {

   const apiKey = 'd718ghUvwIvoMBlizpYESBSR5nHhr77w';   
   const urlApi = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
   const peticion = await fetch(urlApi);

   const resp = peticion.json();
   resp.then( ({data}) => {
      const url = data.images.original.url;
      
      const imagen = document.createElement('img');
      imagen.src = url;
      document.body.append(imagen);
   })

   


};

getGifs();