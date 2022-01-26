import React from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";

function Products() {
  return (
    <section>
      <Header />
      <div className="product">
        <div className="container">
          <div className="col-md-6 mr-auto" style={{ paddingTop: "130px" }}>
            <h1 className="text-light">
              <strong>
                Reliable Cell Phone Tracker for Android and iPhones
              </strong>
            </h1>
            <p className="pt-5">
              Subline. Use the RidaSpy cell phone tracker to keep tabs on your
              kid’s smartphone activities and prevent potential dangers online.
            </p>
            <div className="d-flex">
              <button className="btn primary md-lg px-5 mt-3 mb-5 mr-1">
                <a href="/pricing" className="text-light">
                  {" "}
                  Buy Now
                </a>
              </button>
              <button className="btn textprimary md-lg px-5 mt-3 mb-5 demobtn">
                <i className="fa fa-eye text-light"></i>{" "}
                <a href="/pricing" className="text-muted">
                  View Demo
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section style={{ backgroundColor: "#f3f0f0" }}>
        <div className="container pt-5">
          <h5
            className="text-center text-dark"
            style={{ marginTop: "80px", wordSpacing: "-3px" }}
          >
            MONITOR WITH RidaSpy
          </h5>
        </div>
        <div
          className="container"
          style={{ marginTop: "70px", overflowX: "scroll" }}
        >
          <div className="col-md-8 d-flex justify-content-around mx-auto">
            <i className="fa fa-tty fa-2x"></i>
            <i className="fa fa-camera fa-2x"></i>
            <i className="fa fa-whatsapp fa-2x"></i>
            <i className="fa fa-comment  fa-2x"></i>
            <i className="fa fa-phone  fa-3x"></i>
            <i className="fa fa-envelope-open  fa-3x"></i>
            <i className="fa fa-fire fa-3x"></i>
            <i className="fa fa-snapchat fa-2x"></i>
            <i className="fa fa-comments  fa-2x"></i>
            <i className="fa fa-image fa-2x"></i>
          </div>
          <div className="text-center pb-5 mt-3">
            <button className="btn textprimary md-lg px-3 mt-5 demobtn">
              <i className="fa fa-eye"></i>{" "}
              <a href="/pricing">VIEW OUR PRICES</a>
            </button>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="container" style={{ paddingTop: "100px" }}>
          <div className="row pt-5 pb-5">
            <div className="col-md-1"></div>
            <div className="col-md-5 box bg-light shadow mb-3">
              <div className="text-center mt-4 w-100">
                <h1 className="textprimary">
                  <strong>100%</strong>
                </h1>
                <h6>
                  <strong> OF OUR CUSTOMERS ARE TOTALLY SATISFIED</strong>
                </h6>
                <i className="fa fa-star text-warning fa-2x mt-2 mr-1"></i>
                <i className="fa fa-star text-warning fa-2x mt-2 mr-1"></i>
                <i className="fa fa-star text-warning fa-2x mt-2 mr-1"></i>
                <i className="fa fa-star text-warning fa-2x mt-2 mr-1"></i>
                <i className="fa fa-star text-warning fa-2x mt-2 mr-1"></i>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 box bg-light shadow mb-3">
              <div className="text-center mt-4 w-100">
                <h4 className="mt-4">
                  <strong>RidaSpy is Rated Great</strong>
                </h4>
                <h6>Based on 5,291 reviews</h6>
                <i className="fa fa-star-half textprimary fa-2x mt-2 mr-1"></i>
                <i className="fa fa-star-half textprimary fa-2x mt-2 mr-1"></i>
                <i className="fa fa-star-half textprimary fa-2x mt-2 mr-1"></i>
                <i className="fa fa-star-half textprimary fa-2x mt-2 mr-1"></i>
                <i className="fa fa-star-half textprimary fa-2x mt-2 mr-1"></i>
                <div className="mt-3">
                  <i className="fa fa-star text-success mr-1"></i>
                  <b>Trustpilot</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default Products;
