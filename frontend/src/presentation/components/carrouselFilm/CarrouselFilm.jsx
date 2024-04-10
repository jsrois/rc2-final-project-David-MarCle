import React, { useState, useRef } from 'react';
import './CarrouselFilm.css';
import data from '../../../../json_server/data.json';

const CarrouselFilm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterType, setFilterType] = useState(null);
  const [filterCountry, setFilterCountry] = useState(null);
  const thumbnailContainerRef = useRef(null);

  const handleFilterType = (type) => {
    setCurrentIndex(0);
    setFilterType(type);
    setFilterCountry(null);
    scrollPageToTop();
  };

  const handleFilterCountry = (country) => {
    setCurrentIndex(0);
    setFilterCountry(country);
    setFilterType(null);
    scrollPageToTop();
  };

  const scrollPageToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredResults = data.Film.results.filter(item => {
    const typeMatch = !filterType || (Array.isArray(item.type) ? item.type.includes(filterType) : item.type === filterType);
    const countryMatch = !filterCountry || item.country === filterCountry;
    return typeMatch && countryMatch;
  });

  const currentItem = filteredResults[currentIndex];

  return (
    <div className="carrousel-container">
      <div className="filter-container">
        <button onClick={() => handleFilterType("Comedy")}>Comedia</button>
        <button onClick={() => handleFilterType("Horror")}>Horror</button>
        <button onClick={() => handleFilterType("Adventure")}>Aventura</button>
        <button onClick={() => handleFilterType("Drama")}>Drama</button>
        <button onClick={() => handleFilterType("Thriller")}>Thriller</button>
        <button onClick={() => handleFilterType("Sci-Fi")}>Sci-Fi</button>
        <button onClick={() => handleFilterCountry("Venezuela")}>Venezuela</button>
        <button onClick={() => handleFilterCountry("Spain")}>España</button>
        <button onClick={() => handleFilterCountry("Argentina")}>Argentina</button>
      </div>

      <div className="carrousel-content" ref={thumbnailContainerRef}>
        <div className="row">
          {currentItem && currentItem.url_poster && (
            <div className="column">
              <img
                src={currentItem.url_poster}
                alt={currentItem.title}
                className="poster-image"
              />
            </div>
          )}
          <div className="column">
            <div className="description">
              {currentItem && (
                <>
                  <h2>{currentItem.title}</h2>
                  <p>{currentItem.country}</p>
                  <p>{currentItem.year}</p>
                  <p>{currentItem.length}</p>
                  <p>{Array.isArray(currentItem.type) ? currentItem.type.join(', ') : currentItem.type}</p>
                  <p>{currentItem.director}</p>
                  <p>{currentItem.cast}</p>
                  <p>{currentItem.camera}</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="thumbnail-container">
          {filteredResults.map((item, index) => (
            <img
              key={index}
              src={item.url_poster}
              alt={item.title}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentIndex(index);
                scrollPageToTop(); // Llamar a la función para desplazar la página hacia arriba
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarrouselFilm;
