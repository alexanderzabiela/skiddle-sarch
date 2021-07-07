import "./Button.scss";
import { Link } from "react-router-dom";

const Button = ({ link, text, buttonClass }) => {
  return (
    <Link to={link}>
      <button className={buttonClass}>{text}</button>
    </Link>
  );
};

export default Button;
