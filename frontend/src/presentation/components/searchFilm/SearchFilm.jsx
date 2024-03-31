import "./SearchFilm.css"

export const SearchFilm = () => {
  return (
    <div className="searchFilm">
        <div className="searchFilm__container">
        <h1 className="searchFilm__title">Busca en nuestro catalogo de cortometrajes</h1>
        <p className="searchFilm__text">Encuentra las últimas novedades, por tu género favorito o simplemente el cortometraje que quieres ver</p>
        <div className="searchFilm__inputContainer">
        <input className="searchFilm__input" type="text" placeholder="Buscar"/>
        <button className="searchFilm__button">Buscar</button>
        </div>
        </div>
    </div>
  )
}
