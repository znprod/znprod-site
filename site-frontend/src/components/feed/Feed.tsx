import React, { useEffect, useState } from 'react';

import {FeedEpisode} from '../../types/FeedEpisode';

import Linkify from 'react-linkify';
import nl2br from 'react-nl2br';

import {getEpisodesFeed} from '../../api';
import ExternalWebPlatformLink from '../ExternalWebPlatformLink';

import './Feed.css';

type nl2brResult = Array<string | React.ReactNode>;

export function Feed() {
  const [items, setItems] = useState<FeedEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const episodesLoadingError = () => setError(true);
  const episodesLoadingAttemptDone = () => setLoading(false);

  useEffect(() => {
    getEpisodesFeed()
      .then(setItems)
      .catch(episodesLoadingError)
      .finally(episodesLoadingAttemptDone);
  }, []);

  return (
    <section className="Feed">
      {loading && <div>Загрузка...</div>}

      {!loading &&
        !error &&
        items.map((item) => {

          return (
            <div key={item.num} className="episode">
              <section className="episode-title-with-cover">
                <div className="episode-title-badge"></div>
                <div className="episode-title-link-and-cover-box">
                  <a href={item.link} className="episode-title-link">
                    <span className="episode-title-num">
                      <span className="episode-title-num-marker">#</span>
                      <span className="episode-title-num-val">{item.num}</span>
                    </span>
                    <span className="episode-title-text">{item.title}</span>
                  </a>
                  <div className="episode-cover">
                    <img alt={item.title} src={item.image} />
                  </div>  
                </div>
              </section>
              <section className="episode-content">
                <Linkify>
                  {(nl2br(item.content) as nl2brResult).map(
                    (timeCode, index) => (
                      <React.Fragment key={index}>{timeCode}</React.Fragment>
                    ),
                  )}
                </Linkify>
              </section>
            </div>
          );
        })
      }

      {error && <FeedLoadingErrorDisclaimer />}
    </section>
  );
}

function FeedLoadingErrorDisclaimer(){
  return (
    <div className="FeedLoadingErrorDisclaimer">
      <p className="FeedLoadingErrorDisclaimerTitle">
        Произошла ошибка при загрузке списка эпизодов :( 
      </p>
      <p>
        все выпуски доступны на <ExternalWebPlatformLink webPlatform='youtube' />
      </p>
    </div>
  );
}
