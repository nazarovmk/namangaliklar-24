import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-row-container">
          <h2>NAMANGANLIKLAR 24</h2>
          <div className="footer-df">
            <div className="footer-row-col">
              <p>
                Воспроизводство, копирование, использование информации с сайта
                «NAMANGANLIKLAR24.UZ» возможно только с предварительного
                письменного разрешения редакции.
              </p>
            </div>
            <div className="footer-info-text">
              <p>Информация о сайте</p>
              <p>Напишите нам</p>
              <p>Реклама</p>
              <p>Прислать новость</p>
            </div>
            <div className="footer-info-text info-gap">
              <p>Использование материалов</p>
              <p>Темы дня</p>
              <p>Наша команда</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="pad-top">
          <div className="footer-bottom-wrap-text">
            <p>
              Наши <br /> социальные сети
            </p>
          </div>
          <div className="footer-bottom-icons">
            <Link className="footer-icon-list">
              <img src="./img/footer-facebook.svg" alt="facebook-logo" />
            </Link>
            <Link
              to={"https://instagram.com/namanganliklar24.uz"}
              className="footer-icon-list"
            >
              <img src="./img/footer-instagram.svg" alt="instagram-logo" />
            </Link>
            <Link
              to={"https://t.me/NAMANGANLIKLAR"}
              className="footer-icon-list"
            >
              <img src="./img/footer-telegram.svg" alt="telegram-logo" />
            </Link>
            <Link className="footer-icon-list">
              <img src="./img/footer-youtube.svg" alt="youtube-logo" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
