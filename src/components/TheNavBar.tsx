import { NavLink } from "react-router-dom";
import Logo from "../assets/icons/logo.svg";
import ArrowDown from "../assets/icons/keyboard-arrow-down.svg";
import { useRef, useState } from "react";

const TheNavBar = () => {
  const menuBtn = useRef<HTMLDivElement>(null);
  const nav = useRef<HTMLDivElement>(null);
  const navItem = useRef<HTMLUListElement>(null);

  const menuHandler = () => {
    // e.currentTarget.classList.toggle("active");
    menuBtn.current?.classList.toggle("active")
    nav.current?.classList.toggle("active");
     navItem.current?.classList.toggle("active");

  };


  const [fixed, setFixed] = useState(false);

  const fixedHeader = () => {
    if (window.scrollY >= 80) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  window.addEventListener("scroll", fixedHeader);

  return (
    <>
      {/* Navigation */}
      <nav className={fixed ? "fixed-header" : ""} ref={nav}>
        <div className="nav-item-container">
          {/* Logo  */}

          <NavLink className="navbar-brand logo-image" to="/">
            <img src={Logo} alt="Ecolabz brand logo" />
          </NavLink>
          {/* End of Logo */}

          <ul ref={navItem} className="nav-item-list">
            <li className="nav-item" onClick={menuHandler}>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item" onClick={menuHandler}>
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>

            <li className="nav-item" onClick={menuHandler}>
              <NavLink to="/project" className="nav-link">
                Projects
              </NavLink>
            </li>
            
            <li className="nav-item" onClick={menuHandler}>
              <NavLink
                className="nav-link"
                to="/team"
              >
                Team
              </NavLink>
            </li>
            <li className="nav-item" onClick={menuHandler}>
              <NavLink className="nav-link" to="/contact">
                Contact us <img src={ArrowDown} alt="" />
              </NavLink>
            </li>
          </ul>

          <div ref={menuBtn} className="menu-btn">
            <div onClick={menuHandler} className="menu-btn__burger"></div>
          </div>
        </div>
      </nav>

      {/* End of Navigation */}
    </>
  );
};

export default TheNavBar;
