import { Card } from "../cards/Card"

export const GridGallery = ({category}) => {

    const dataFetch = [
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
    ]


  return (
    <>
        <h2 class="h2">{category}</h2>
        <section class="box">
        {
            dataFetch.map(({id, nombre, autor})=>(
                <Card key={id} id={id} nombre={nombre} autor={autor}/>                     
            ))
        }
        </section>
    </>
  )
}
