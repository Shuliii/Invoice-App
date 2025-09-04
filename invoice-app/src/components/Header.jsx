import ToggleTheme from "./UI/ToggleTheme";
import style from "./Header.module.css";

import Logo from "../assets/logo.svg";
import Moon from "../assets/icon-moon.svg";

import Profile from "../assets/image-avatar.jpg";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo__container}>
          <img className={style.logo} src={Logo} alt="Logo" />
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
