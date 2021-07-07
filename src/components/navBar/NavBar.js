import "./NavBar.scss";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <img className="logo" src={logo} />
      </Link>
    </div>
  );
};

export default NavBar;
