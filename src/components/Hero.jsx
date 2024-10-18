/* eslint-disable no-unused-vars */
import React from "react";

export const Hero = () => {
  return (
    <div>
      <nav className="py-3 text-danger fixed-top">
        <h2 className="logo-text-style">Balancing Beads</h2>
      </nav>
      <div className="hero d-flex justify-content-center align-items-center mt-nav text-light">
        <div className="hero-content">
          <div className="form-center">
            <div className="text-center">
              <h1 className="title-style">Search By Tyre Size</h1>
              <p className="hero-description">
                Find the required quantity of balancing beads by tyre size...
              </p>
            </div>
          </div>
          <div className="input-group mb-3 my-5">
            <input
              type="text"
              className="form-control"
              placeholder="Search by tyre size"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-info" type="button" id="button-addon2">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
