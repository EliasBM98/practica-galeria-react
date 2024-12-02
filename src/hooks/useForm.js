import { useState } from "react";

export const useForm = () => {

    //Hook useState 
    const [formulario, setFormulario] = useState({})

    //ojo esta serializacion nos va a servir para cualquier formulario con numero indefinido de inputs, nos vale para cualquier formulario, va a capturar todos los names y values de todos los inputs
    const serializeForm = (formulario) => {
        const formData=new FormData(formulario)

        const data={}

        for(let [name, value] of formData){
            data[name]=value
        }
        return data
    }



    //funcion para capturar los datos que se envian
    const handlerSubmit=(ev)=>{
        ev.preventDefault();
        //console.log({ev.target.nombre.value})
        //ev es el evento y target es el formulario que desencadena el eventoç
        console.log(ev.target)
        const data = serializeForm(ev.target)


        setFormulario(data)
    };

    //Funcion manejadora del evento change, recibe desestruturado el target del evento, target es el objeto que desencadena el evento
    const handlerChange=({target})=>{
    
        const {name, value} = target
    //Esparcimos el formulario y le reasignamos el valor con la propiedad conmutada name 
        setFormulario({
            ...formulario, 
            [name]: value
        });

        
    };


  return {
    handlerSubmit,
    handlerChange,
    formulario

}
}
