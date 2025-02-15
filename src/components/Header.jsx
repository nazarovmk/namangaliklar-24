import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [lang, setLang] = useState("uz");

  return (
    // HEADER START
    <header>
      <div className="hader-top">
        <div className="header-wrapper container">
          <div className="header-col">
            <img
              src="./img/namangaliklar-24.svg"
              alt="namangalliklar-24-logo"
              width={276}
              height={45}
            />
            <div className="header-row">
              <p>
                <span>$</span> 10137.2
              </p>
              <p>
                <span>P</span> 138.26
              </p>
            </div>
          </div>

          <div className="headerinput-wrapper">
            <div>
              <label htmlFor="text">
                <FontAwesomeIcon
                  className="search-icon"
                  icon={faMagnifyingGlass}
                />
              </label>
              <input type="text" id="text" placeholder="Поиск" />
            </div>
            <div className="lang-switcher">
              <button
                className={lang === "uz" ? "lang-btn active" : "lang-btn"}
                onClick={() => setLang("uz")}
              >
                UZ
              </button>
              <button
                className={lang === "ru" ? "lang-btn active" : "lang-btn"}
                onClick={() => setLang("ru")}
              >
                RU
              </button>
            </div>
            <button className="exit-btn">
              <Link className="exit-btn-link" to="/Войти">
                Войти
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* NAV BAR */}
      <div className="nav-bar-container container">
        <ul>
          <li>
            <Link className="nav-bar-list" to="/">
              Главное
            </Link>
          </li>
          <li>
            <Link className="nav-bar-list" to="/Интересное">
              Интересное
            </Link>
          </li>
          <li>
            <Link className="nav-bar-list" to="/Экономика">
              Экономика
            </Link>
          </li>
          <li>
            <Link className="nav-bar-list" to="">
              Политика
            </Link>
          </li>
          <li>
            <Link className="nav-bar-list" to="">
              Общество
            </Link>
          </li>
          <li>
            <Link className="nav-bar-list" to="">
              Технологии
            </Link>
          </li>
          <li>
            <Link className="nav-bar-list" to="">
              Спорт
            </Link>
          </li>
          <li>
            <Link className="nav-bar-list" to="">
              Культура
            </Link>
          </li>
          <li>
            <Link className="nav-bar-list" to="">
              Происшествия
            </Link>
          </li>
          <li>
            <Link className="nav-bar-list" to="">
              Наука
            </Link>
          </li>
        </ul>
      </div>
      <hr className="liner container" />
    </header>
    // HEADER END
  );
}

export default Header;
