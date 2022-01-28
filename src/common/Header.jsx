import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../images/RidaSpy.png";

export default function Header() {
  return (
    <header className="">
      <nav className="navbar  navbar-expand-lg navbar-light shadow2">
          <a className="navbar-brand offset-0 offset-md-2" href="/">
            <img src={logo} width="120px" alt="ridaspy logo" />
          </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars text-white fa-2x"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <div id="google_translate_element"></div>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/compatibility">
                Compatibility
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
