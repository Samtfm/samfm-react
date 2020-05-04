import React, { useState, useEffect } from 'react';
import './ZoomableImage.css';
import { enableScroll, disableScroll } from './util/scroll'


const ZoomableImage = ({title, url}) => {
  const [expanded, setExpanded] = useState(false)
  const expand = () => {
    setExpanded(true);
    disableScroll();
  }
  const dismiss = () => {
    setExpanded(false);
    enableScroll();
  }

  return (
    <div>
      {expanded && (
        <div
          className={'ZoomableImage-overlay'}
          onClick={dismiss}
        >
          <img
            src={url}
            alt={title}
          />
        </div>
      )}
      <img
        className={'ZoomableImage-thumbnail'}
        src={url}
        alt={title}
        onClick={expand}
      />
    </div>
  );
}

export default ZoomableImage;
