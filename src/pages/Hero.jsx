import './styles.css'
import Phone1 from '../images/top-figure6.webp'

function Hero() {
    return (
        <section id="hero">
            <div className="container">
                <div className="row">
                <div className="col-md-6 col-lg-5 m-auto">
                    <h1 className="text-light"><strong>The Best Phone Tracker</strong></h1>
                    <h3 className="text-light mb-3">for Parental Control</h3>
                    <h5 className="text-muted">Know more. Worry less. That’s the power of RidaSpy, the app that lets you find out what they’re up to on their phone and online. And they won’t even know you’re using it.</h5>
                <div className="d-flex">
                <button className="btn primary md-lg px-5 mt-5"><a href="/pricing" className="text-light"> Buy Now</a></button>
                <button className="btn textprimary md-lg px-5 mt-5 demobtn"><i className="fa fa-eye"></i> <a href="/pricing">View  Demo</a></button>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 m-auto">
                     <img src={Phone1} alt="" id="phone1" />

                     <div className="">
                         <i className="fa fa-apple text-muted mr-3"></i><i className="fa fa-android text-muted mr-3"></i> <small className="text-muted">compatible</small>
                     </div>
                </div>
                </div>
                <div className="row" style={{marginTop:"60px"}}>
                    <div className="col-md-12 m-auto col-lg-10">
                        <h3 className="mt-5 text-warning">Stop relying on a hunch.</h3>
                        <h3 style={{marginBottom:"50px"}}><strong className="text-light">Find out the truth.</strong></h3>
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <div className="find">
                                    <div className="icon mr-md-3 mr-lg-4"><i className="fa fa-eye  text-white"></i></div>
                                    <h6 className="text-muted">Monitor every keystroke & every tap</h6>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <div className="find">
                                    <div className="icon mr-md-3 mr-lg-4"><i className="fa fa-map-marker text-white"></i></div>
                                    <h6 className="text-muted">See where they’ve been and going</h6>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <div className="find">
                                    <div className="icon mr-md-3 mr-lg-4"><i className="fa fa-mobile fa-2x text-white"></i></div>
                                    <h6 className="text-muted">Find out who they’ve called</h6>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <div className="find">
                                    <div className="icon mr-md-3 mr-lg-4"><i className="fa fa-search text-white"></i></div>
                                    <h6 className="text-muted">See what they’ve searched</h6>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <div className="find">
                                    <div className="icon mr-md-3 mr-lg-4"><i className="fa fa-paper-plane text-white"></i></div>
                                    <h6 className="text-muted">Read their social media chats</h6>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <div className="find">
                                    <div className="icon mr-md-3 mr-lg-4"><i className="fa fa-comment text-white"></i></div>
                                    <h6 className="text-muted">Review their texts (including deleted texts)</h6>
                                </div>
                            </div>              
                            <div className="col-md-4 mb-5">
                                <div className="find">
                                    <div className="icon mr-md-3 mr-lg-4"><i className="fa fa-image text-white"></i></div>
                                    <h6 className="text-muted">See the pics they share and receive</h6>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <div className="find">
                                    <div className="icon mr-md-3 mr-lg-4"><i className="fa fa-eye-slash text-white"></i></div>
                                    <h6 className="text-muted">Do it all without being detected</h6>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
