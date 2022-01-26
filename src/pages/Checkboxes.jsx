function Checkboxes() {
  return (
    <section>
      <div className="container">
        <h3
          className="text-center text-dark"
          style={{ marginTop: "80px", wordSpacing: "-3px" }}
        >
          RidaSpy checks all the boxes
        </h3>
        <div className="col-md-10 m-auto text-center">
          <p className=" text-dark mt-4">
            Everything you’re looking for in a mobile tracking app is right
            here. In creating RidaSpy, our goal was to deliver a remote cell
            phone tracking solution that works out of the box, is easy to use,
            and gives you the information you need whenever you need it, all
            without making you scratch your head.
          </p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
           <div className="col-md-1"></div>
           <div className="col-md-3 box mb-3 bg-black shadow">
               <i className="fa fa-cogs text-white mt-4 ml-2 mb-3 fa-2x"></i>
               <h6 className="text-light ml-2"><strong>Setup is a breeze</strong></h6>
               <p className="text-muted ml-2 my-3">It takes about 5 minutes to set up RidaSpy. For real.</p>
           </div>
           <div className="col-md-1"></div>
           <div className="col-md-3 box mb-3 primary shadow">
           <i className="fa fa-history text-white mt-4 ml-2 mb-3 fa-2x"></i>
               <h6 className="text-light ml-2"><strong>You’re always up-to-date</strong></h6>
               <p className="text-dark ml-2 my-3">RidaSpy feeds you the latest information, updating everything every 5 minutes.</p>
           </div>
           <div className="col-md-1"></div>
           <div className="col-md-3 box mb-3 bg-black shadow">
           <i className="fa fa-eye-slash text-white mt-4 ml-2 mb-3 fa-2x"></i>
               <h6 className="text-light ml-2"><strong>You’ll be invisible</strong></h6>
               <p className="text-muted ml-2 my-3">There’s no app icon for them to see, so they won’t know you’re using it.</p>
           </div>
           <div className="col-md-1"></div>
           <div className="col-md-3 box mb-3 bg-black shadow">
           <i className="fa fa-lock text-white mt-4 ml-2 mb-3 fa-2x "></i>
               <h6 className="text-light ml-2"><strong>Everything’s secure</strong></h6>
               <p className="text-muted ml-2 my-3">We use bank-grade encryption to transmit the information. That means only you can see it.</p>
           </div>
           <div className="col-md-1"></div>
           <div className="col-md-3 box mb-3 primary shadow">
           <i className="fa fa-headphones text-white mt-4 ml-2 mb-3 fa-2x"></i>
               <h6 className="text-light ml-2"><strong>We’re always here for you</strong></h6>
               <p className="text-dark ml-2 my-3">Whenever you need help, just shout. We’re available 24/7.</p>
           </div>
           <div className="col-md-1"></div>
           <div className="col-md-3 box mb-3 bg-black shadow">
           <i className="fa fa-tag text-white mt-4 ml-2 mb-3 fa-2x"></i>
               <h6 className="text-light ml-2"><strong>It’s so affordable</strong></h6>
               <p className="text-muted ml-2 my-3">RidaSpy is way less than the price of your daily coffee.</p>
           </div>
        </div>
        <div className="text-center">
          <button className="btn primary md-lg px-5 mt-5">
            <a href="/pricing" className="text-light">
              {" "}
              Buy Now
            </a>
          </button>
          <button className="btn textprimary md-lg px-5 mt-5 demobtn"><i className="fa fa-eye"></i> <a href="/pricing">View  Demo</a></button>
        </div>
      </div>
    </section>
  );
}

export default Checkboxes;
