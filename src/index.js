import React from 'react';
import ReactDOM from 'react-dom'

import { GifExpertApp } from './GifExpertApp';

import './index.css';

ReactDOM.render(
   <GifExpertApp />,
   document.querySelector('#root')
);

// const getGifs = async() => {

//    const apiKey   = 'd718ghUvwIvoMBlizpYESBSR5nHhr77w';
//    const urlApi   = `https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=${apiKey}`;

//    const resp     = await fetch(urlApi);
//    const { data } = await resp.json();
//    const { url }  = data[0].images.original;
//    console.log(url);

//    const imagen   = document.createElement('img');
//    imagen.src     = url;
//    document.body.append(imagen); 
  

// };

// getGifs();