import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="contianer-fluid nav_bg">
        <div className="row">
          <div className="col-10">
          
            <nav className="navbar mb-5 px-5 navbar-expand-lg">
              <div className="container-fluid">
                <Link aria-current="page" className="navbar-brand" to={"/"}>
                  Byte Web
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item d-flex">
                      
                      <NavLink activeClassName="active" aria-current="page" className="nav-link" to={"/"}>
                        Home
                      </NavLink>

                      <NavLink
                        aria-current="page"
                        className="nav-link"
                        to={"/about"}
                      >
                        About
                      </NavLink>

                      <NavLink
                        aria-current="page"
                        className="nav-link"
                        to={"/service"}
                      >
                        Services
                      </NavLink>

                      <NavLink
                        aria-current="page"
                        className="nav-link"
                        to={"/contact"}
                      >
                        Contact
                      </NavLink>

                      
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <div className="contianer-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">

            </div>
        </div>
      </div> */
}
