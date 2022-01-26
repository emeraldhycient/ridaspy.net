import React from "react";
import "./styles.css";

function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer>
      <div id="footer">
        <div className="con">
          <div className="container">
            <div className="row m-auto">
              <div className="col-md-4 mt-4">
                <a className="" href="/">
                  <h3 className="textprimary">
                    <b>RIDASPY</b>
                  </h3>
                </a>
              </div>
              <div className="col-md-4 mt-4">
                <h4 className="text-light">
                  <b>QUICK LINKS</b>
                </h4>
                <div className="mt-4">
                  <ul className="quick">
                    <li>
                      <h6>
                        <a href="/" className="text-light">
                          Home
                        </a>
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <a href="/pricing" className="text-light">
                          Pricing
                        </a>
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <a href="/Products" className="text-light">
                          Products
                        </a>
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <a href="/Compatibility" className="text-light">
                        Compatibility
                        </a>
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <h4 className="text-light">
                  <b>GET IN TOUCH</b>
                </h4>
                <div className="d-flex mt-4">
                  <div className="circle mr-2">
                    <i className="fa fa-facebook fa-2x text-light"></i>
                  </div>
                  <div className="circle mr-2">
                  <a href="https://wa.link/u4brfj">
                    <i className="fa fa-whatsapp fa-2x text-light"></i>
                    </a>
                  </div>
                  <div className="circle mr-2">
                    <i className="fa fa-instagram fa-2x text-light"></i>
                  </div>
                  <div className="circle mr-2">
                    <i className="fa fa-twitter fa-2x text-light"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-part text-center pt-3">
        <h5>
          <b className="text-light mr-2">&copy; RidaSpy</b>
          <span className="text-muted">{year}</span>
        </h5>
      </div>
    </footer>
  );
}

export default Footer;
