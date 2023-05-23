/* eslint-disable jsx-a11y/anchor-is-valid */
import "../App.css";
import React,{useState} from "react";
// import axios from "axios";
// import { ProgressBar } from "react-bootstrap";
// import { Link } from "react-router-dom";

const UploadandDetectionPage = () => {
  // const [uploadPercentage, setUploadPercentage] = useState(0);
  return (
    <div className="Page">
      <div className="uploadimage">
        <div className="text-logo">
          <div className="text">
            <h6>Step 1(a) : Upload image in DICOM format</h6>
            <p>(Maximum 30 at a time)</p>
          </div>
          <img src={require("../images/upload-logo.png")} alt="info" />
        </div>
        <p>Uploading files :</p>
        <div className="box">
          {/* <input
            type="file"
            className="form-control profile-pic-uploader"
            onChange={uploadFile}
          />
          {uploadPercentage > 0 && (
            <ProgressBar
              now={uploadPercentage}
              active
              label={`${uploadPercentage}%`}
            />
          )} */}
        </div>
        <p>Uploading status :</p>
      </div>
      <div className="detection"></div>
    </div>
  );
};

export default UploadandDetectionPage;
