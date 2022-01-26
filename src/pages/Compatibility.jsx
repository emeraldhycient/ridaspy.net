import React, { useState } from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";

function Compatibility() {
  const [isloading, setisloading] = useState(false);

  const check = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setisloading(true);
    }, 2500);

    return false;
  };

  return (
    <section className="compat">
      <Header />
      <div className="compat2">
        <div className="container">
          <div className="col-md-7 mx-auto" style={{ paddingTop: "130px" }}>
            <h2 className="text-center text-white">
              <strong>Compatibility</strong>
            </h2>
            <h6 className="text-center text-light mt-3 mb-5">
              {" "}
              Check your device compatibility
            </h6>
            <form className="form-group text-center" onSubmit={check}>
              <div className="formcontainer d-flex justify-content-center align-items-center bg-light">
                <input
                  type="text"
                  name=""
                  placeholder="device model"
                  className="form-control borderless py-4"
                  required
                />
                <button type="submit" className="btn">
                  <i className="fa fa-search fa-2x mr-1 ml-2"></i>
                </button>
              </div>
            </form>
            {isloading ? (
              <div className="text-light mt-0">
                <i className="fa fa-check-circle text-light mr-1"></i>Great,
                your device is compatible
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <section
        style={{
          backgroundColor: "#f3f0f0",
          height: "fit-content",
          paddingTop: "60px",
        }}
      >
        <h6 className="text-center">
          <strong>RidaSpy COMPATIBLE WITH ALL POPULAR DEVICES</strong>
        </h6>
        <div className="container mb-4 pb-4">
          <div className="col-md-3 text-center d-flex mx-auto mt-5">
            <div className="square mr-5">
              <i className="fa fa-android fa-3x"></i>
            </div>
            <div className="square">
              <i className="fa fa-apple fa-3x"></i>
            </div>
          </div>
        </div>
      </section>
      <div
        className="container"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div className="col-md-5 mx-auto">
          <h6 className="text-center">
            <strong>START MONITORING NOW</strong>
          </h6>
          <div className="d-flex">
            <button className="btn primary md-lg px-5 mt-5 mr-2">
              <a href="/pricing" className="text-light">
                {" "}
                Buy Now
              </a>
            </button>
            <button className="btn textprimary md-lg px-5 mt-5 demobtn">
              <i className="fa fa-eye"></i> <a href="/pricing">View Demo</a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Compatibility;
