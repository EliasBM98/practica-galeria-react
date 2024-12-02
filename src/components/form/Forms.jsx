import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

export const Forms = ({onNewCategory}) => {

  const {formulario, handlerSubmit} = useForm(onNewCategory)

  //Utilizamos hook useEffect para controlar que la funcion se va a ejectuar ña primera vez que se monte el componente y cada vez que cambie formulario
  useEffect(()=>{

      console.log(formulario)
      
    if (formulario.busqueda != "") onNewCategory(formulario.busqueda)
  },[formulario])
  

  return (
        <form id="formulario" className="formulario" onSubmit={handlerSubmit}>
            <input type="text" name="busqueda" placeholder="Buscar fotos" className="buscador"/>
            <input type="submit" value="Buscar" className="button"/>
        </form>
  )
}
