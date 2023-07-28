import React from "react";

const Navbar = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-black text-decoration-none"
          ></a>
          <img className="app-logo" height="52" src="snitch.jpg" alt="Snitch" />
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-black">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-black">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-black">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-black">
                About
              </a>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-warning">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
