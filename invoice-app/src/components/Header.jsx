import {Link} from "react-router-dom";
import ToggleTheme from "./UI/ToggleTheme";
import style from "./Header.module.css";

import Logo from "../assets/logo.svg";

import Profile from "../assets/image-avatar.jpg";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo__container}>
          <Link to="/">
            <img className={style.logo} src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className={style.actions}>
          <ToggleTheme />
          <div className={style.profile}>
            <img
              className={style.profile__picture}
              src={Profile}
              alt="profile picture"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
