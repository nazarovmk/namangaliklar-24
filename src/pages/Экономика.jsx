import "./Экономика.css";
function Экономика() {
  return (
    <main>
      <section className="container">
        <div className="Economy-col Economy">
          <div className="Economy-row">
            <span>
              <img src="./img/Tesla-icon.svg" alt="" />
              <p>FBM.ru 22:23</p>
            </span>
            <h2>
              Илон Маск принял участие во Всемирной сетевой конференции в Китае
            </h2>
            <img
              src="./img/Tesla-big-img.png"
              alt="Tesla-img"
              width={797}
              height={300}
            />
            <div className="element-wrap">
              <p>
                Илон Маск (Elon Musk, Руководитель фирмы Tesla и других
                проектов) уже второй раз за полторы недели обратился к китайским
                правящим кругам и гражданам. В видеоролике он уверил их в своей
                готовности инвестировать средства в развитие и расширять бизнес
                на территории этой страны. Особое внимание будет уделяться
                небезопасности обрабатываемых данных.{" "}
              </p>
              <p>
                Они будут храниться только в самом Китае и поэтому будут
                доступны правительству Поднебесной в любой момент.
              </p>
              <p>
                Новые заявления Илон Маск сделал во время видеообращения к
                аудитории мероприятия World Internet Conference, которое прошло
                в конце недели в Поднебесной. Компанию ему составили
                руководители Cisco Systems (Чак Роббинс), Intel (Пэт Гелсингер)
                и Qualcomm (Кристиано Амон), а интересы бизнеса Китайской
                Народной Республики представляли руководители Alibaba и Xiaomi.{" "}
              </p>
              <p>
                Открывал мероприятие Лю Хэ (Liu He, Вице-премьер Госсовета КНР),
                который привёл слова Си Цзиньпина (Xi Jinping) о стремлении
                Поднебесной работать со всеми державами над созданием прозрачной
                цифровой экономики.
              </p>
              <p>
                В ближайшее время Tesla собирается не только сделать шире объёмы
                производства автомобилей на электрической тяге в шанхайском
                филиале, но и разработать силами местной студии недорогую модель
                электрического автомобиля (стоимостью менее 25 000 долларов).
              </p>
              <p>
                {" "}
                Уже в настоящий момент собранные в Китайской Народной Республике
                электрокары Tesla Model Y и Model 3 поставляются на экспорт в
                Европу.
              </p>
            </div>
          </div>
          {/*  */}

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
              <hr />
              <h4>В Самаркандской области произошел пожар в торговом центре</h4>
              <p>UPL24 23:52</p>
            </div>
            <img
              src="./img/Chegirma.svg"
              alt="Chegirma"
              width={393}
              height={338}
            />
          </div>
        </div>
        <hr className="Economy-liner" />

        <div className="Eco-wrapper">
          <h2>По вашим интересам</h2>
          <div className="Ecol-row">
            <div className="Economy-bottom">
              <h3>
                Стали известны ёмкости аккумуляторов всех моделей iPhone 13
              </h3>
              <p>
                Во время презентации iPhone 13 Apple придала большое значения...
              </p>
              <span>
                <img src="./img/digger-img.svg" alt="" />
                <p>Digger.ru 14:25</p>
              </span>
            </div>

            <div className="Economy-bottom">
              <h3>
                Nature: ученые смогли доказать природное происхождение
                коронавируса SARS-CoV-2
              </h3>
              <p>
                Во время презентации iPhone 13 Apple придала большое значение...
              </p>
              <span>
                <img src="./img/lenta-icon.svg" alt="" />
                <p>Lenta.ru 10:54</p>
              </span>
            </div>

            <div className="Economy-bottom">
              <h3 className="last-h3">
                Китайская марка JAC повысила цены на лифтбек и пикап в России
              </h3>
              <p>
                Две модели китайского бренда JAC из пяти, представленных на
                российском...
              </p>
              <span>
                <img src="./img/taranst-img.svg" alt="" />
                <p>Тарантас Ньюс 10:44</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Экономика;
