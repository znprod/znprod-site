import React from 'react';

import IframeVideoBox from './IframeVideoBox'
import { LinkData } from '../../types/LinkData';

type IframeVideosListProps = {
  videos: LinkData[]
}

function IframeVideosList(props: IframeVideosListProps){
  const videos: LinkData[] = props.videos;

  const videoBoxes = videos.map((video: LinkData, idx: number) => {
    const {title, link}: LinkData = video;

    return (
      <IframeVideoBox 
        title={title}
        link={link}
        key={idx}
      />
    );
  });

  return (
    <section className="videoBoxes">
      {videoBoxes}
    </section> 
  );
}

export default IframeVideosList;