import { useState } from "react"
import { useFetchReutilizable } from "../../hooks/useFetchReutilizable"
import { Forms } from "../form/Forms"
import { GridGallery } from "../GridGallery/GridGallery"



export const Gallery = () => {

    /*const categories = ['Road', 'Edificio', 'Coches']*/

    /*Tengo que recibir del formulario la nueva categoria a través de la busqueda*/

    const [categories, setCategories] = useState([])

    const onNewCategory = (newCategory) =>{
        const existe = categories.find((cat)=> cat.toLowerCase() == newCategory.toLowerCase())

        if (existe) return

        setCategories([newCategory, ...categories])

    }


  return (
    <>
        <h1 className="h1">Buscador de fotos</h1>
        {/* FORMULARIO */}
        <Forms onNewCategory={onNewCategory}/>

        {/* GRID GALLERY */}
            {/* FOTOS */}
        <section>
            {
                categories != [] && categories.map((category)=>(
                    <GridGallery key={category} category={category}/>
                ))
            }
        </section>

    </>
)
}
