
export const apiRest = async (url, method='GET', body={}, auth="") => {
    
   
    try{
        let options={}
        if (method=='POST' || method=='PUT'){
            options = {
                method,
                body,
                headers:{
                    Authorization
                }
            }
        }

        if (method =='GET' || method=='DELETE'){
            options = {
                method,
                body
            }
        }


        const respuesta = await fetch(url,{
            method,
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
}