
export const GridGallery = (categoria) => {

    const dataFetch = [
        {
            id:1,
            nombre: 'foto1',
            autor: 'Pepe'
        },
        {
            id:2,
            nombre: 'foto2',
            autor: 'Pepon'
        },
        {
            id:3,
            nombre: 'foto3',
            autor: 'Pepito'
        }
    ]


  return (
    <>
    <h2 key={category}>{category}</h2>
        <section>
        {
            dataFetch.map(({id, nombre, autor})=>(
                                        
                <article key={id}>
                    <h3>{nombre}</h3>
                    <h3>{autor}</h3>
                </article>
            ))
            }
        </section>
    </>
  )
}
