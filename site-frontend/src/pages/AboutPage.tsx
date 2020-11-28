import React from 'react';
import PageHeader from './partials/PageHeader';

export default function AboutPage() {
  const title = 'О подкасте';

  return (
    <div className="content">
      <PageHeader title={title} />

      <p>
          <p>Подкаст "Цинковый прод" - это подкаст про разработку, тимлидство и прочее IT, и
          имеет развлекательно-познавательный формат. Чаще всего наши выпуски напоминают разговоры в офисе за обедом или в курилке. Мат-перемат, ржачка, но и польза тоже есть.
          Бывают, в прочем, и серьёзные выпуски, где мы зовём именитого гостя и допрашиваем.</p>

          <p>Нас можно слушать как в аудиоформате в любой программе для прослушивания подкастов или на сайте <a href={"https://soundcloud.com/znprod"}>SoundCloud</a>,
              так и <a href={"https://www.youtube.com/channel/UC6cTShKx3lJWw-EzSr_ZAfw/videos?view=0&sort=p&flow=grid&view_as=subscriber"}>смотреть на youtube</a>. Можно участвовать в прямых эфирах по четвергам в 20:00 МСК</p>

          <p>Вот примеры наших популярных выпусков:</p>
          <div>
              <p>Дима Столяров объясняет, почему Кубернетес нужен вообще везде:</p>
              <p>
                  <iframe title="Дима Столяров объясняет, почему Кубернетес нужен вообще везде" width="560" height="315" src="https://www.youtube.com/embed/slE11sPm8fQ" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen></iframe>
              </p>
          </div>

          <div>
              <p>Дима Пацура говорит, что PHP отстой, и надо пользоваться NodeJS:</p>
              <p>
                  <iframe title="PHP отстой, и надо пользоваться NodeJS" width="560" height="315" src="https://www.youtube.com/embed/aVVTNg_mI7U"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen></iframe>
              </p>
          </div>

          <a href={"http://localhost:3000/subscribe"}>Подписывайтесь</a>, чтобы не пропустить свежие выпуски

      </p>
      <p>Постоянные ведущие подкаста:</p>
      
      <HeroesList />
    </div>
  );
}

function HeroesList() {
  const heros = [
    'Антон Околелов',
    'Никита Васильченко',
    'Олег Грицак',
  ]
  
  const getListItem = (hero: string, idx: number) => <li key={idx}>{hero}</li>

  return (
    <ul>
      {heros.map(getListItem) }
    </ul>
  )
}