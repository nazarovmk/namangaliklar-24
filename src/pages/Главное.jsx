import "./Главное.css";
function Главное() {
  return (
    <main>
      <section className="home-container container">
        <div className="home-wrapper">
          <div>
            <img
              src="./img/Главное.shpMe-img.png"
              alt="ShopMe-logo"
              width={1200}
              height={128}
            />
          </div>
          <div className="information-container">
            <div className="information-col">
              <h3>
                Кандидат на пост канцлера ФРГ Шольц назвал условия коалиционного
                соглашения
              </h3>
              <p>
                Лидер Социал-демократической партии Германии (СДПГ) и кандидат
                на должность...
              </p>
              <img src="./img/ИА-Красная-Весна.svg" alt="Красная-Весна-img" />
              <span>
                <img
                  className="KB-img"
                  src="./img/image-KB.svg"
                  alt="image-KB"
                  width={20}
                  height={20}
                />
                <p>ИА Красная Весна 15:55</p>
              </span>
            </div>

            <div className="information-col">
              <h3>
                Ученые доказали экспериментальным путем пользу покровных культур
              </h3>
              <p>
                Новое исследование ученых университета Иллинойса объединяет
                полевые данные...
              </p>
              <img src="./img/wheat-img.svg" alt="wheat-img" />
              <span>
                <img
                  className="KB-img"
                  src="./img/image-g.svg"
                  alt="image-g"
                  width={20}
                  height={20}
                />
                <p>Газета.Ru 12:54</p>
              </span>
            </div>

            <div className="information-col">
              <h3>
                Baidu запустила публичный сервис роботакси Apollo Go в Шанхае
              </h3>
              <p>
                Автопарк Baidu состоит из модифицированных электромобилей EV...
              </p>
              <img src="./img/bAUDI-IMG.svg" alt="Taxi-img" />
              <span>
                <img
                  className="KB-img"
                  src="./img/x+img.svg"
                  alt="image-x+"
                  width={20}
                  height={20}
                />
                <p>Хайтек+ 13:44</p>
              </span>
            </div>

            <div className="information-col">
              <h3>
                Стали известны ёмкости аккумуляторов всех моделей iPhone 13
              </h3>
              <p>
                Во время презентации iPhone 13 Apple придала большое значения...
              </p>
              <img src="./img/iphone-img.svg" alt="iphone-img" />
              <span>
                <img
                  className="KB-img"
                  src="./img/digger-img.svg"
                  alt="digger-img"
                  width={20}
                  height={20}
                />
                <p>Digger.ru 14:25</p>
              </span>
            </div>

            <div className="information-col">
              <h3>
                Nature: ученые смогли доказать природное происхождение
                коронавируса SARS-CoV-2
              </h3>
              <p>
                Во время презентации iPhone 13 Apple придала большое значение...
              </p>
              <img src="./img/lenta-img.svg" alt="lenta-img" />
              <span>
                <img
                  className="KB-img"
                  src="./img/lenta-icon.svg"
                  alt="lenta-img"
                  width={20}
                  height={20}
                />
                <p>Lenta.ru 10:54</p>
              </span>
            </div>

            <div className="information-col">
              <h3>
                Китайская марка JAC повысила цены на лифтбек и пикап в России
              </h3>
              <p>
                Две модели китайского бренда JAC из пяти, представленных на
                российском...
              </p>
              <img src="./img/car-img.svg" alt="car-img" />
              <span>
                <img
                  className="KB-img"
                  src="./img/taranst-img.svg"
                  alt="car-img"
                  width={20}
                  height={20}
                />
                <p>Тарантас Ньюс 10:44</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="Включит-btn-container">
        <div className="Включит-btn-wrap">
          <p>Хотите быть в курсе свежих новостей? Включите уведомления!</p>
          <button>Включит</button>
        </div>
      </section>
      <section className="mire-wrapper container">
        <h2>В мире</h2>
        <div className="mire-container">
          <div className="mire-row">
            <div className="mire-col">
              <span>
                <img src="./img/planeta.svg" alt="plane-img" />
              </span>
              <span>
                <h3>
                  Китайский Чунцин запустил чартерный рейс для студентов до
                  Британии
                </h3>
                <p>
                  Чартерный рейс с 244 китайскими студентами вылетел из города
                  центрального подчинения Чунцина на юго-западе Китая в
                  британский Манчестер...
                </p>
                <span className="img-text-con">
                  <img src="./img/image-KB.svg" alt="" />
                  <p>ИА Красная Весна 12:25</p>
                </span>
              </span>
            </div>

            <div className="mire-col">
              <span>
                <img src="./img/Tacc-gerl-img.svg" alt="Tacc-img" />
              </span>
              <span>
                <h3>
                  В Германии выпустят ограниченную партию плюшевых мишек в
                  образе Меркель
                </h3>
                <p>
                  БЕРЛИН, 19 сентября. / ТАСС/. Знаменитая фабрика по
                  производству плюшевых игрушек в городе Кобург (федеральная
                  земля Бавария) изготовила уникального...
                </p>
                <span className="img-text-con">
                  <img src="./img/Tacc-img.svg" alt="" />
                  <p>ТАСС 11:35</p>
                </span>
              </span>
            </div>

            <div className="mire-col">
              <span>
                <img src="./img/KHP.img.svg" alt="KHP-img" />
              </span>
              <span>
                <h3>
                  Акции КНР утратили доверие инвесторов. Что делать с бумагами
                  прямо сейчас
                </h3>
                <p>
                  За последние месяцы инвесторы в китайский рынок пережили
                  настоящее потрясение — из-за ужесточения регулирования
                  технологического сектора и критики некоторых...
                </p>
                <span className="img-text-con">
                  <img src="./img/KHP-icon.svg" alt="" />
                  <p>РБК Инвестиции 09:35</p>
                </span>
              </span>
            </div>

            <div className="mire-col">
              <span>
                <img src="./img/Kitay-countr.svg" alt="Kitay-img" />
              </span>
              <span>
                <h3>
                  Китай раскритиковал заключенный Австралией, США и
                  Великобританией антикитайский союз AUKUS
                </h3>
                <p>
                  Не только Франция, которая лишилась многомиллиардного
                  контракта с Австралий, осталась недовольна созданием
                  трехстороннего оборонного альянса AUKUS, пишет Anna-News.info
                </p>
                <span className="img-text-con">
                  <img src="./img/Kitay-country-icon.svg" alt="" />
                  <p>Solenka.info 19:43</p>
                </span>
              </span>
            </div>
          </div>
          <div className="mire-rightwrap">
            <div className="mire-right-top-wrap">
              <h3>Главное</h3>
              <h4>В Фергане создадут узбекско-пакистанский университет</h4>
              <p>Sputnik Узбекистан 14:09</p>
              <hr />
              <h4>
                Узбекистан утвердил соглашение о содействии занятости в странах
                СНГ
              </h4>
              <p>ИА Красная Весна 10:19</p>
              <hr />
              <h4>
                В Узбекистане увеличиваются очереди за автомобилями UzAuto
              </h4>
              <p>Северная газета (Армянск) 13:50</p>
              <hr />
              <h4>Минтуризма опровергло приостановку выплат за шаги</h4>
              <p>Sputnik Узбекистан 14:32</p>
            </div>
            <img
              src="./img/Chegirma.svg"
              alt="Chegirma"
              width={393}
              height={338}
            />
          </div>
        </div>
        <div className="container mire-bottom-btn">
          <button>Показать ещё</button>
        </div>
      </section>
    </main>
  );
}

export default Главное;
