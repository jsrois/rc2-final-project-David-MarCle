import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './CarrouselFilm.css';
import data from '../../../../json_server/data.json'; // Importa el archivo JSON


const CarrouselFilm = () => {
  const images = data.Film.results.map(item => ({
    original: item.url_poster,
    thumbnail: item.url_poster,
    description: (
      <div className='dd'>
       
        
        <h2>{item.title}</h2>
        
        <p>{item.country}</p>
        <p>{item.year}</p>
        <p>{item.length}</p>
        <p>{item.type}</p>
        <p>{item.director}</p>
        <p>{item.cast}</p>
        <p>{item.camera}</p>
      </div>
    ),
  }));

  return (
    
    <ImageGallery 
      items={images}
      showPlayButton={false}
      autoPlay={false}
    />
  );
};

export default CarrouselFilm;
