import React from 'react';
import { LinkData } from '../types/LinkData';
import { getExternalWebPlatformMeta } from '../collections/EXTERNAL_WEB_PLATFORMS_META';

type Props = {
  webPlatform: string,
  linkText?: string,
  linkQuery?: string
}

function ExternalWebPlatformLink(props: Props) {
  const {webPlatform, linkText, linkQuery}: Props = props;

  const platform: LinkData = getExternalWebPlatformMeta(webPlatform);

  const linkTitle: string = linkText || platform.title;

  let linkFullUrl: string = platform.link;
  if(linkQuery) {
    linkFullUrl += '?' + linkQuery;
  }

  return (
    <a 
      href={linkFullUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="ExternalWebPlatformLink"
    >
      {linkTitle}
    </a>
  );
};


export default ExternalWebPlatformLink;
