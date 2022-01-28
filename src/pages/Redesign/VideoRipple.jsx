import React from "react";
import "./redesign.css";


export const VideoRipple = () => {    
  return (
    <section className="container videoripple">
      <center>
        <h3
          className="text-muted"
          style={{ fontWeight: 600, fontSize: "28px" }}
        >
          What is Parental Control App ?
        </h3>
        <hr style={{ width: "20%", height: "4px" }} />
       
      </center>

      <div className="ripple" data-toggle="modal"
            data-target="#exampleModalCenter">
          <i
            className="fa fa-play fa-3x"
          ></i>

      </div>
         
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                  What is Parental Control App ?
                                    </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/Qm4RzPnY9hY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                </div>
              </div>
            </div>
          </div>
    </section>
  );
};
