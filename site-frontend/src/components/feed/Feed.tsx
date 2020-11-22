import React, { useEffect, useState } from 'react';
import Linkify from 'react-linkify';

import getEpisodesFeed from '../../api/getEpisodesFeed';

import './Feed.css';

const nl2br = require('react-nl2br');

type nl2brResult = Array<string | React.ReactNode>;

type Item = {
  num: string;
  title: string;
  content: string;
  link: string;
  image: string;
  duration: string;
};

export function Feed() {
  const [items, setItems] = useState<Item[]>([]);
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
    <div className="Feed">
      {loading && <div>Loading...</div>}

      {!loading &&
        !error &&
        items.map((item) => {
          const styles = {
            backgroundImage: "url('" + item.image + "')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: '485px',
            backgroundPositionY: '40px',
          };

          return (
            <div key={item.num} className="episode" style={styles}>
              <div className="episode-title" key={item.title}>
                <a href={item.link} className="label">
                  <span className="title-num">#{item.num} </span>
                  {item.title}
                </a>
              </div>
              <div className="num">{item.num}</div>
              <div className="item-content">
                <Linkify>
                  {(nl2br(item.content) as nl2brResult).map(
                    (timeCode, index) => (
                      <React.Fragment key={index}>{timeCode}</React.Fragment>
                    ),
                  )}
                </Linkify>
              </div>
            </div>
          );
        })}

      {error && <div>Error loading feed</div>}
    </div>
  );
}
