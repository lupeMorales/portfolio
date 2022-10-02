import "../styles/components/Arrow.scss";

import { Link } from "react-router-dom";
const Arrow = () => {
  return (
    <Link to="/" target="_parent" className="index__link">
      <div className="arrow"></div>
      <i class="fa-solid fa-arrow-left-long-to-line"></i>
    </Link>
  );
};
export default Arrow;
