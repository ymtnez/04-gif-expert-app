export const getGifs = async( categ ) => {
    //encodeURI() se utiliza para escapar los espacios en blanco con %20
    const apiKey = 'Ns1IgnDyFXIpSxgiZSOj9RTSj4vDOCt3';
    const urlApi = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categ ) }&limit=10&api_key=${ apiKey }`;
    
    const resp     = await fetch(urlApi);
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
    
    return gifs;
}