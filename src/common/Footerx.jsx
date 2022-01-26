import "./styles.css";

import ame from "../images/american-express.png";
import visa from "../images/visa.png";
import jcb from "../images/jcb.png";
import symbol from "../images/symbol.png";
import symbols from "../images/symbols.png";

function Footer() {
  return (
    <footer style={{ backgroundColor: "whitesmoke", paddingTop: "100px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <small>Secure online payment:</small>
            <div className="mt-3" style={{ height: "50px" }}>
              <img
                src={ame}
                alt=""
                srcset=""
                width="62px"
                height="40px"
                className="p-1"
              />
              <img
                src={visa}
                alt=""
                srcset=""
                width="62px"
                height="40px"
                className="p-1"
              />
              <img
                src={jcb}
                alt=""
                srcset=""
                width="62px"
                height="40px"
                className="p-1"
              />
              <img
                src={symbol}
                alt=""
                srcset=""
                width="62px"
                height="40px"
                className="p-1"
              />
              <img
                src={symbols}
                alt=""
                srcset=""
                width="62px"
                height="40px"
                className="p-1"
              />
            </div>
          </div>
          <div className="col-md-3">
            <small>approved by</small>
            <div className="mt-3">
              <img
                src="https://www.mspy.com/static/mspy/public/assets/images/sb-widget-logo-b.png"
                alt=""
                srcset=""
                width="80px"
                height="40px"
                className="p-1"
              />
              <img
                src="https://www.mspy.com/static/mspy/public/assets/images/pci-dss-logo.svg"
                alt=""
                srcset=""
                width="80"
                height="40px"
                className="p-1"
              />
              <img
                src="https://www.mspy.com/static/mspy/public/assets/images/Credit_Card_Safe_light.png"
                alt=""
                srcset=""
                width="62px"
                height="40px"
                className="p-1"
              />
            </div>
          </div>
          <div className="col-md-3">
            <small>social</small>
            <div className="d-flex pt-3">
              <div className="">
                <i className="fa fa-facebook text-primary fa-2x mr-1"></i>
              </div>
              <div className="">
                <i className="fa fa-twitter text-info fa-2x mr-1"></i>
              </div>
              <div className="">
                <i className="fa fa-whatsapp text-success fa-2x mr-1"></i>
              </div>
              <div className="">
                <i className="fa fa-instagram text-danger fa-2x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <small>contact us</small>
            <h6 className="text-muted mt-3">
              <a href="https://wa.link/u4brfj">
                <i className="fa fa-whatsapp text-success"></i>whatsapp
              </a>
            </h6>
            <h6 className="text-muted mt-3">
              <a href="tel:+19733064297">+19733064297</a>
            </h6>
            <h6 className="text-muted">
              <a href="mailto:hackrida10@gmail.com">hackrida10@gmail.com</a>
            </h6>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container mt-5">
        <h6>
          <small>Disclaimer</small>
        </h6>
        <p className="text-muted">
          <small>
            SOFTWARE INTENDED FOR LEGAL USE ONLY. It is the violation of the
            applicable law and your local jurisdiction laws to install the
            Licensed Software onto a device you do not own.The law generally
            requires you to notify owners of the devices... more
          </small>{" "}
        </p>
        <p className="text-muted text-center">
          <small>
            © 2021 RidaSpy. All trademarks are the property of their respective
            owners.
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
