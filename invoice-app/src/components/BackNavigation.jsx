import { Link, useParams, useLocation } from "react-router-dom";
import style from "./BackNavigation.module.css";

import ArrowLeft from "../assets/icon-arrow-left.svg";

const BackNavigation = () => {
  const { id } = useParams();
  const location = useLocation();
  let backTo = "/";
  if (location.pathname.includes("/edit")) {
    backTo = `/invoice/${id}`;
  } else if (location.pathname.includes(`/invoice/${id}`)) {
    backTo = "/";
  }
  return (
    <div className={style.backNavigation}>
      <div className={style.container}>
        <Link to={backTo}>
          <img src={ArrowLeft} alt="arrow left icon" />
          <p>Go back</p>
        </Link>
      </div>
    </div>
  );
};

export default BackNavigation;
