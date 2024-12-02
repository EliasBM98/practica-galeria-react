import {useEffect, useState} from 'react'
import { getPhotos } from '../helpers/getPhotos'

export const useFetchReutilizable = (category) => {
  
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

    /*const pexels = async () => { 
 

        const url = `${import.meta.env.VITE_URL_BASE}search?query=${category}&per_page=5`
        try{
            const respuesta = await fetch(url,{
                method: 'GET',
                headers:{
                    Authorization:`${import.meta.env.VITE_API_KEY_PEXELS}`
                } 
            });

            if(respuesta.ok){
                return respuesta.json();
               
            } else{
                throw ('Error en la conexion')
            };

        }catch(error){
            throw error;
        };
    };*/ 

    /*const getPhotos = async () => {
        if (!category) return;

        const { photos } = await pexels();

        const images = photos.map((image)=>({
            id: image.id,
            photographer: image.photographer,
            photographer_url: image.photographer_url,
            alt: image.alt,
            src: image.src.small
        }));

        setPhotos(images);
    };*/

    const getData = async () => {
        const images = await getPhotos(category)
        setPhotos(images)
        setIsLoading(false)

    }

    useEffect(()=>{
        getData()
    }, [])



    return {
        photos,
        isLoading
    }
    
  
}
