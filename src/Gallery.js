import React from 'react';
import ZoomableImage from './ZoomableImage';
import './Gallery.css';

const Gallery = ({pictures}) => {
  return (
    <section>
      <ul className={'Gallery-photo-grid'}>
        {pictures.map(picture => (
          <li>
            <ZoomableImage
              title={picture.title}
              url={picture.url}
              width={160}
              height={100}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Gallery;
