import {FeedEpisode} from '../types/FeedEpisode';
import { episodesFeedEndpoint as endPoint} from './endpoints';

export async function getEpisodesFeed():Promise<FeedEpisode[]> {
  const response = await fetch(endPoint);
  
  if (!response.ok) {
    throw new Error(`${endPoint} не отвечает`);
  }

  return response.json();
}
