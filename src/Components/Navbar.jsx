import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [pathname, setPathname] = useState("/");

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container p-3">
          <Link className="navbar-brand fw-bolder display-4">
            JERRY DANIELS
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  onClick={() => {
                    setPathname("/about");
                  }}
                  className={
                    pathname === "/about" ? " active nav-link" : "nav-link"
                  }
                  aria-current="page"
                  to={"/about"}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    setPathname("/portfolio");
                  }}
                  className={
                    pathname === "/portfolio" ? " active nav-link" : "nav-link"
                  }
                  to={"/portfolio"}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    setPathname("/contact");
                  }}
                  className={
                    pathname === "/contact" ? " active nav-link" : "nav-link"
                  }
                  to={"/contact"}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand">Home</Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
          </div>
        </div>
      </nav> */}
    </>
  );
}
