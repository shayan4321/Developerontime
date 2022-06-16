import React from 'react'
import Navbar from './Navbar';
import Service from './Service';
import Design_Con from './Design_Con';
import Outstanding from './Outstanding';
import Lets_talk from './Lets_talk';
import Testimonials from './Testimonials';
import Transforming from './Transforming';
import Cost_frind from './Cost_frind';
import Contact_email from './Contact_email';
import Footer from './Footer';

const Home = () => {

   
    const setButtonURL = () => {
        Tawk_API.toggle();
    }
    // < !--Start of Tawk.to Script-- >
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/602ec746918aa26127404a8f/1eurbkr8s';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();
    // < !--End of Tawk.to Script-- >
    return (
      
        <>
          <Navbar />
          <div className="banner-slider">
              {/* <section className="home-bnerwrp homewrp">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-6">
                              <div className="txtwrp">
                                  <h4 className="wow fadeInDown">Website Design and Development Service</h4>
                                  <h1 className="wow fadeInDown">100% Original and Creative Websites</h1>
                                  <p className="wow fadeInDown">Nexo Designs works with a team of enthusiastic designers and developers who are dedicated professionals in delivering the best websites for any business. Our websites are:</p>
                                  <ul>
                                      <li>Interactive</li>
                                      <li>Mobile Friendly </li>
                                      <li>Optimized</li>
                                      <li>Responsive</li>
                                  </ul>
                              </div>
                              <div className="imgmain">
                                  <ul className="wow fadeInDown">
                                      <li>
                                          <img className="lazy" src="assets/images/trust-b.png" alt="trust-b"/>
                                      </li>
                                      <li>
                                          <img className="lazy" src="assets/images/google-b.png" alt="google-b"/>
                                      </li>
                                      <li>
                                          <img className="lazy" src="assets/images/bings-logo.png" alt="bings-logo"/>
                                      </li>
                                  </ul>
                              </div>
                              <div className="btnwrp">
                                  <a className="btn-1" href="https://nexodesigns.com/let-get-started">Let's Get Started</a>
                                  <a className="btn-2" onClick={setButtonURL} href="javascript:;">Chat With Us</a>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="imgwrp">
                                  <img src="assets/images/banner-img-1.png" className="animated bounceIn" data-animation="bounceIn" data-delay="2.2s" alt="banner-img-1"/>
                              </div>
                          </div>
                      </div>
                  </div>
              </section> */}
              <section className="home-bnerwrp homewrp">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-6">
                              <div className="txtwrp">
                                    <h4 className="wow fadeInDown ml-3">OUR UNDERSTANDING YOUR PROGRESS</h4>
                                    <h2 className="wow fadeInDown">CREATE A MEMORABLE BRAND FOR YOUR BUSINESS AND CONQUER THE WORLD.</h2>
                                  <p className="wow fadeInDown">Our creative designers are equipped with all the right tools that are needed to build interactive websites, helping you engage visitors and boom your online presence.</p>
                                  <ul>
                                      <li>Customized</li>
                                      <li>Optimized </li>
                                      <li>Result driven</li>
                                      <li>Measurable</li>
                                  </ul>
                              </div>
                              <div className="imgmain">
                                  <ul className="wow fadeInDown">
                                      <li>
                                          <img className="lazy" src="assets/images/trust-b.png" alt="trust-b"/>
                                      </li>
                                      <li>
                                          <img className="lazy" src="assets/images/google-b.png" alt="google-b"/>
                                      </li>
                                      <li>
                                          <img className="lazy" src="assets/images/bings-logo.png" alt="bings-logo"/>
                                      </li>
                                  </ul>
                              </div>
                              <div className="btnwrp">
                                  <a className="btn-1" href="">Let's Get Started</a>
                                  <a className="btn-2" onClick={setButtonURL} href="javascript:;">Chat With Us</a>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="imgwrp">
                                  <img src="assets/images/banner-img-2.png" alt="banner-img-2" className="animated bounceIn"
                                    //   style="animation-delay: 2.2s;"
                                      
                                      data-animation="bounceIn" data-delay="2.2s" />
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/* <section className="home-bnerwrp homewrp">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-6">
                              <div className="txtwrp">
                                  <h4 className="wow fadeInDown">Digital Marketing Agency with a distinction </h4>
                                  <h1 className="wow fadeInDown">100% Original and Creative Websites</h1>
                                  <p className="wow fadeInDown">Nexo Designs works with a team of enthusiastic designers and developers who are dedicated professionals in delivering the best websites for any business. Our websites are:</p>
                                  <ul>
                                      <li>Customized</li>
                                      <li>Optimized </li>
                                      <li>Result driven</li>
                                      <li>Measurable</li>
                                  </ul>
                              </div>
                              <div className="imgmain">
                                  <ul className="wow fadeInDown">
                                      <li>
                                          <img className="lazy" src="assets/images/trust-b.png" alt="trust-b"/>
                                      </li>
                                      <li>
                                          <img className="lazy" src="assets/images/google-b.png" alt="google-b"/>
                                      </li>
                                      <li>
                                          <img className="lazy" src="assets/images/bings-logo.png" alt="bings-logo"/>
                                      </li>
                                  </ul>
                              </div>
                              <div className="btnwrp">
                                  <a className="btn-1" href="https://nexodesigns.com/let-get-started">Let's Get Started</a>
                                  <a className="btn-2" onClick={setButtonURL} href="javascript:;">Chat With Us</a>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="imgwrp">
                                  <img src="assets/images/banner-img-3.png" alt="banner-img-3" className="animated bounceIn img-exta lazy" data-animation="bounceIn" data-delay="2.2s"/>
                              </div>
                          </div>
                      </div>
                  </div>
                </section> */}
                <Service/>
                <Design_Con />
                <Outstanding />
                <Lets_talk/>
                <Testimonials />
                <Transforming />
                <Cost_frind />
                <Contact_email/>
                <Footer/>
          </div>
        </>
    )
    
}

export default Home;
