import React from "react";

function Navbar(props) {
  return (
    <div>
      <div
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-4 py-2 justify-content-between`}
      >
        <a href="/" className="text-decoration-none">
          <h4
            className={`my-auto text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            Text Utils
          </h4>
          <p className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
            by mewtwosenpaii
          </p>
        </a>

        <div className="navbar-brand form-check form-switch my-auto">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label
            className="form-check-label nav-link"
            htmlFor="flexSwitchCheckDefault"
          >
            Dark Mode
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
