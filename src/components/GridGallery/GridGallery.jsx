import { getPhotos } from "../../helpers/getPhotos"
import { useFetchReutilizable } from "../../hooks/useFetchReutilizable"
import { Card } from "../cards/Card"

export const GridGallery = ({category}) => {

    const { photos, isLoading } = useFetchReutilizable(category)

    /*const photos = [
        {
            id:1,
            nombre: 'Foto1',
            autor: 'Pepe'
        },
        {
            id:2,
            nombre: 'Foto2',
            autor: 'Pepon'
        },
        {
            id:3,
            nombre: 'Foto3',
            autor: 'Pepito'
        }
    ]*/


  return (
    <>
        {
            isLoading && <p>Cargando...</p>
        }

        <h2 className="h2">{category}</h2>
        <section className="box">
        {
            photos.map(({id,
                            photographer,
                            photographer_url,
                            alt,
                            src})=>(
                <Card key={id} id={id} photographer={photographer} visitr={photographer_url} alt={alt} src={src}/>                     
            ))
        }
        </section>
    </>
  )
}
