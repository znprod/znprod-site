import React from 'react';
import PageHeader from './partials/PageHeader';

import ExternalWebPlatformLink from '../components/ExternalWebPlatformLink';

export default function SubscribePage() {
  const title = 'Подписаться';

  const youtubeLink = <ExternalWebPlatformLink webPlatform='youtube' linkText='Здесь' />;
  const applePodcastsLink = <ExternalWebPlatformLink webPlatform='applePodcasts' />;
  const podcastAddictLink = <ExternalWebPlatformLink webPlatform='podcastAddict' />;
  const soundCloudLink = <ExternalWebPlatformLink webPlatform='soundCloud' />;
  
  const tgChatLink = <ExternalWebPlatformLink webPlatform='tgChat' />;
  const tgChanelLink = <ExternalWebPlatformLink webPlatform='tgChanel' />;
  const twitterLink = <ExternalWebPlatformLink webPlatform='twitter' />;
  const instagramLink = <ExternalWebPlatformLink webPlatform='instagram' />;

  return (
    <div className="content">
      <PageHeader title={title} />
      
      <p>
        Посмотреть и подписаться на Youtube можно {youtubeLink}
      </p>
      
      <p>
        Аудиоверсию можно найти в любой программе для прослушивания подкастов,
        например {applePodcastsLink} или {podcastAddictLink} (Android). Очень много бесплатного софта. Просто устанавливаете, вбиваете в поиске "Цинковый прод" и подписываетесь.
      </p>

      <p>
        Или можно слушать прямо на сайте {soundCloudLink}
      </p>

      <p>
        Также у нас есть {tgChatLink}, {tgChanelLink}, {twitterLink} и даже {instagramLink}
      </p>
    </div>
  );
}
