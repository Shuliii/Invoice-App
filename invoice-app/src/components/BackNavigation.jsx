import { useNavigate } from "react-router-dom";
import style from "./BackNavigation.module.css";

import ArrowLeft from "../assets/icon-arrow-left.svg";

const BackNavigation = () => {
  const navigate = useNavigate();
  return (
    <div className={style.backNavigation}>
      <div className={style.container}>
        <a href="#" onClick={() => navigate(-1)}>
          <img src={ArrowLeft} alt="arrow left icon" />
          <p>Go back</p>
        </a>
      </div>
    </div>
  );
};

export default BackNavigation;
