import React, { useState, useEffect } from 'react';
import './ZoomableImage.css';
const ZoomableImage = ({title, url, width, height}) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div>
      {expanded && (
        <div
          className={'ZoomableImage-overlay'}
          onClick={() => setExpanded(false)}
        >
          <img
            src={url}
            alt={title}
          />
        </div>
      )}
      <img src={url} alt={title} width={width} onClick={() => setExpanded(true)} />
    </div>
  );
}

export default ZoomableImage;
