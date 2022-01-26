import heldphone from "../images/step-phone3.png";

function Steps() {
  return (
    <section style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h1>Get Started in 3 Easy Steps</h1>
            <div className="mt-5 stepcontainer">
              <div className="steps">
                <div className="circled primary">1</div>
                <div className="line"></div>
              </div>
              <div className="steps2">
                <h4>Create your free account</h4>
                <p className="text-muted">
                  It’s as easy as entering your email. We’ll set you up with
                  your own RidaSpy account, so you’ll be ready to monitor their
                  activity in no time.
                </p>
              </div>
            </div>

            <div className="stepcontainer">
              <div className="steps">
                <div className="circled primary">2</div>
                <div className="line"></div>
              </div>
              <div className="steps2">
                <h4>Pick your plan</h4>
                <p className="text-muted">
                  Everyone’s needs are different, so we’ve got multiple plans
                  that work for you, your family, and the devices you use.
                </p>
              </div>
            </div>

            <div className="stepcontainer">
              <div className="steps">
                <div className="circled primary">3</div>
                <div className="line"></div>
              </div>
              <div className="steps2">
                <h4>Start monitoring and rest easy</h4>
                <p className="text-muted">
                  Put your feet up. Once you’ve paid for your subscription, you
                  can log in to your Control Panel and view their activity. Easy
                  as that.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 m-auto">
            <figure>
              <img src={heldphone} alt="" srcset="" width="90%" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
