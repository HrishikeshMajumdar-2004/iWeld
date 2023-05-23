/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

const AboutCoeamtPage = () => {
  return (
    <div className="Page">
      <div>
        <Link to="/">
          <a className="btn btn-dark" href="#" role="button">
            Previous
          </a>
        </Link>
      </div>
      <div className="pagecontainer">
        <div className="pagebuttons">
          <Link to="/CoeamtPage">
            <a className="btn btn-info" href="#" role="button">
              About Coeamt
            </a>
          </Link>
        </div>
        <div className="pageimage">
          <img src={require("../images/coeamt.jpg")} alt="info" />
        </div>
      </div>
      <div>
        <Link to="/UploadandDetectionPage">
          <a className="btn btn-dark" href="#" role="button">
            Next
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AboutCoeamtPage;
