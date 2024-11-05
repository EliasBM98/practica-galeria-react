
export const Card = ({id, nombre, autor}) => {
  return (
    <article key={id}>
        <h3>{nombre}</h3>
        <h3>{autor}</h3>
    </article>
  )
}
