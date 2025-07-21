import React from "react";
import { Link, Links } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  bg-white border-bottom">
      <div className="container">
        < Link className="navbar-brand" to={"/"}>
          <img src="/images/logo.svg" alt="Logo" className="d-inline-block align-text-top" style={{width:"25%",marginLeft:"5rem",padding:"1rem"}}/>
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
            <form className="d-flex" role="search">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to={"/signup"}>
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to={"/signin"}>
                SignIn
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/products"}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/pricing"}>
                Pricings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/support"}>
                Support
              </Link>
            </li>
          </ul>
          
           
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
