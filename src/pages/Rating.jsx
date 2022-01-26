import "./styles.css";

function Rating() {
  return (
    <section className="bg-black">
      <div className="container" style={{ marginTop: "100px" }}>
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
  );
}

export default Rating;
