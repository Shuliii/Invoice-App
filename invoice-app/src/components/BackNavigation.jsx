import {Link} from "react-router-dom";
import style from "./BackNavigation.module.css";

import ArrowLeft from "../assets/icon-arrow-left.svg";

const BackNavigation = () => {
  return (
    <div className={style.backNavigation} to={`/`}>
      <div className={style.container}>
        <Link to="/">
          <img src={ArrowLeft} alt="arrow left icon" />
          <p>Go back</p>
        </Link>
      </div>
    </div>
  );
};

export default BackNavigation;
