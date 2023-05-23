/* eslint-disable jsx-a11y/anchor-is-valid */
import "../App.css";
import React from "react";

const DownloadManual = () => {
  return (
    <div className="Page">
      {/* <div><a className="btn btn-dark" href="#" role="button">
        Previous
      </a></div> */}
      <div className="ManualPdf">
        
          <object
            data="http://africau.edu/images/default/sample.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              Alternative text - include a link{" "}
              <a href="http://africau.edu/images/default/sample.pdf">
                to the PDF!
              </a>
            </p>
          </object>
        
      </div>
      {/* <div>
        <Link to="/AboutCoeamtPage">
          <a className="btn btn-dark" href="#" role="button">
            Next
          </a>
        </Link>
      </div> */}
    </div>
  );
};

export default DownloadManual;
