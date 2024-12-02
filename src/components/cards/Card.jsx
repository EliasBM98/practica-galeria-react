import './cards.css'

export const Card = ({id,
                      photographer,
                      photographer_url,
                      alt,
                      src}) => {
  return (
    <article key={id}>
        <div><img src={src} alt={alt} /></div>
        <h3 className="h3_1">{photographer}</h3>
        <h3 className="h3_2">{photographer_url}</h3>
    </article>
  )
}
