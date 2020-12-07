import React from 'react';
import PageHeader from './partials/PageHeader';

import { LinkData } from '../types/LinkData';

import ShowmakersList from '../components/showmakers/showmakers-list/ShowmakersList';
import IframeVideosList from '../components/iframe-video/IframeVideosList';
import ExternalWebPlatformLink from '../components/ExternalWebPlatformLink';

export default function AboutPage() {
  const title = 'О подкасте';

  const watchOnYoutubeLink = <ExternalWebPlatformLink 
                              webPlatform='youtube' 
                              linkText='смотреть на youtube' 
                              linkQuery='view=0&sort=p&flow=grid&view_as=subscriber'
                            />;
  const soundCloudLink = <ExternalWebPlatformLink webPlatform='soundCloud' />;

  const videoExamples: LinkData[] = [
    {
      title: "Дима Столяров объясняет, почему Кубернетес нужен вообще везде",
      link: "https://www.youtube.com/embed/slE11sPm8fQ"
    },
    {
      title: "Дима Пацура говорит, что PHP отстой, и надо пользоваться NodeJS",
      link: "https://www.youtube.com/embed/aVVTNg_mI7U",
    },
  ];

  return (
    <div className="content">
      <PageHeader title={title} />

      <section>
        <p>
          Подкаст "Цинковый прод" - это подкаст про разработку, тимлидство и прочее IT, и имеет развлекательно-познавательный формат. Чаще всего наши выпуски напоминают разговоры в офисе за обедом или в курилке. Мат-перемат, ржачка, но и польза тоже есть.
          Бывают, в прочем, и серьёзные выпуски, где мы зовём именитого гостя и допрашиваем.
        </p>

        <p>
          Нас можно слушать как в аудиоформате в любой программе для прослушивания подкастов или на сайте {soundCloudLink}, так и {watchOnYoutubeLink}. Можно участвовать в прямых эфирах по четвергам в 20:00 МСК
        </p>

        <h3>Вот примеры наших популярных выпусков:</h3>

        <IframeVideosList videos={videoExamples} />

        <p>
          <a href={"/subscribe"}>Подписывайтесь</a>, чтобы не пропустить свежие выпуски
        </p>

      </section>
      
      <h3>Постоянные ведущие подкаста:</h3>

      <ShowmakersList />
    </div>
  );
}






