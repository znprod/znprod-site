export default async function getEpisodesFeed() {
  // endPoint now in the separate const for future testing improvement purpose (need to add possibility to dynamically switch prod/staging)
  const endPoint = 'https://api.znprod.io/api/feed';

  const response = await fetch(endPoint);
  return await response.json();
}
