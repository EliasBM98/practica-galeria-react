import { Forms } from "../form/Forms"
import { GridGallery } from "../GridGallery/GridGallery"



export const Gallery = () => {

    const categories = ['naturaleza', 'edificio', 'casa']

  return (
    <>
        <h1>Buscador de fotos</h1>
        {/* FORMULARIO */}
        <Forms/>

        {/* GRID GALLERY */}
            {/* FOTOS */}
        <section>
            {
                categories.map((category)=>(
                    <GridGallery key={category} category={category}/>
                ))
            }
        </section>





        

    </>
)
}
