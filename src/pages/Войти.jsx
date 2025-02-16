import "./Войти.css";
function Войти() {
  return (
    <main>
      <section className="container Login-wrap">
        <h2>Напишите нам</h2>
        <div className="All-row">
          <div className="Войти-wrapper-container">
            <form>
              <span>
                <input type="text" placeholder="Имя" />
                <input type="number" placeholder="Номер телефона" />
              </span>
              <input id="pochta" type="email" placeholder="Электронная почта" />
              <textarea placeholder="Текст"></textarea>
              <button>Отправить</button>
            </form>
          </div>
          {/*  */}
          <div className="Login">
            <h3>Электронная почта</h3>
            <a href="mailto:info@namanganliklar24.uz">
              info@namanganliklar24.uz
            </a>
            <hr />
            <h3>Номер телефона</h3>
            <a href="tel:+998885225476">+998 88 522-54-76</a>
            <hr />
            <h3>Адрес</h3>
            <p>Ташкент, площадь Мустакиллик, 6 </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Войти;
