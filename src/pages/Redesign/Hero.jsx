import React from "react";

const Hero = () => {
  return (
    <section id="hero_redesign">
      <div className="blur">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Undetectable Phone Spy App</h2>
              <h5>
                Get remote access to all data and activities on any phone!
              </h5>
              <button className="btn primary px-5 py-2 mt-5 d-none d-md-block d-lg-block">
                <a href="/pricing" className="text-light text-decoration-none">Get Started Now</a>
              </button>
            </div>
            <div className="col-md-6 pt-4">
              <ul id="hero_redesign_list">
                <li className="text-light">
                  <i className="fa fa-check-circle mr-2 textprimary"></i> All
                  sent, received, or deleted messages
                </li>
                <li className="text-light">
                  <i className="fa fa-check-circle mr-2 textprimary"></i>
                  Incoming and outgoing calls
                </li>
                <li className="text-light">
                  <i className="fa fa-check-circle mr-2 textprimary"></i> GPS
                  location & routes
                </li>
                <li className="text-light">
                  <i className="fa fa-check-circle mr-2 textprimary"></i>
                  Whatsapp, Snapchat, Instagram, FB, etc
                </li>
                <li className="text-light">
                  <i className="fa fa-check-circle mr-2 textprimary"></i> On any
                  iPhone, iPad, or Android device
                </li>
              </ul>
              <button className="btn primary px-5 py-2 mt-4 d-md-none d-lg-none d-block">
              <a href="/pricing" className="text-light text-decoration-none">Get Started Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
