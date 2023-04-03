import React from 'react';
import ReactDOM from 'react-dom'

import { GifExpertApp } from './GifExpertApp';

import './index.css';

ReactDOM.render(
  <GifExpertApp />,
  document.getElementById('root')  
);

const getGifs = () => {  

  //https://api.giphy.com/v1/gifs/random?api_key=

  //const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=Ns1IgnDyFXIpSxgiZSOj9RTSj4vDOCt3';
  const url = 'https://api.giphy.com/v1/gifs/random?api_key=83i7O10QCBh6UcA8OfZ2Bn9UJPR4f356';
  const peticion =  fetch(url);

  peticion
    .then( (resp) => resp.json() )//En este caso hacemos un return implicito
    .then( ({data}) => {
        const {url} = data.images.original;

        const imagen = document.createElement('img');
        imagen.src   = url;
        document.body.append(imagen); 

        console.log(data)
    })



};

getGifs();