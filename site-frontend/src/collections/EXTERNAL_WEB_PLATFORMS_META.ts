import { LinkData } from '../types/LinkData';

interface EXTERNAL_WEB_PLATFORMS_META  {
  [key: string]: LinkData
}

const _EXTERNAL_WEB_PLATFORMS_META: EXTERNAL_WEB_PLATFORMS_META = {
  applePodcasts: {
    link: 'https://podcasts.apple.com/ru/podcast/%D1%86%D0%B8%D0%BD%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D0%B4-18/id1458311254?mt=2',
    title: 'Apple Podcasts',
  },
  podcastAddict: {
    link: 'https://play.google.com/store/apps/details?id=com.bambuna.podcastaddict&hl=ru&gl=US',
    title: 'Podcast Addict',
  },
  soundCloud: {
    link: 'https://soundcloud.com/znprod',
    title: 'SoundCloud',
  },
  youtube: {
    link: 'https://www.youtube.com/channel/UC6cTShKx3lJWw-EzSr_ZAfw',
    title: 'Youtube',
  },
  tgChat: {
    link: 'https://t.me/ZnProd',
    title: 'Telegram-чат',
  },
  tgChanel: {
    link: 'https://t.me/ZnProdChannel',
    title: 'Telegram-канал',
  },
  twitter: {
    link: 'https://twitter.com/podcast_znprod',
    title: 'Twitter',
  },
  instagram: {
    link: 'https://www.instagram.com/zn.prod',
    title: 'Instagram',
  }
}

function getExternalWebPlatformMeta(webPlatform: string): LinkData {
  const platformExistInList = _EXTERNAL_WEB_PLATFORMS_META.hasOwnProperty(webPlatform);

  if(platformExistInList){
    return {..._EXTERNAL_WEB_PLATFORMS_META[webPlatform]};
  }

  throw new Error(`webPlatform '${webPlatform}' does not exist in routes`);
}

export { getExternalWebPlatformMeta };
