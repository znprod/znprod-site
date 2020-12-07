import React from 'react';
import { LinkData } from '../../types/LinkData';

function IframeVideoBox(props: LinkData) {
  const {link, title}: LinkData = props;
  
  const iframeAllowSettings = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

  return (

      <div className="IframeVideoBox">
          <p>{title}:</p>
          <div>
              <div className="max-youtube">
                <div className="youtube-wrapper">
                  <iframe 
                    title={title}
                    width="560"
                    height="315"
                    src={link}
                    frameBorder="0"
                    allow={iframeAllowSettings}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
          </div>
      </div>
  )
}

export default IframeVideoBox;