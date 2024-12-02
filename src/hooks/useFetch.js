
import { useEffect, useState } from "react"




export const useFetch = (categoria="coche", method='GET') => {

    const urlBase=`https://api.pexels.com/v1/search?query=${categoria}&per_page=1`

    const[busqueda, setBusqueda] = useState([])

    const getFotos = async()=>{

        try{
            const respuesta = await fetch(`${urlBase}`,{
                method:method,
                headers:{
                    Authorization:"5GpfihdKfeSMosPoFNyEMnrJu1Zq9mAMRnSSkqSaSdnigbKshpahrnqK"
                }  
            })
    
            if(respuesta.ok){
                const data = respuesta.json();
                setBusqueda(data)
            } else{
                throw ('Error en la conexion')
            }
    
        }catch(error){
            throw error;
        }
    }

    /*Utilizamos el hook useEfect para determinar que solo se ejecute una vez cuado cargue el componente, así evitamos el bucle infinito cuando invocamos la funcion */
    useEffect(()=>{
        getFotos()
    },[])


  return {
    busqueda
}
       
  
}








