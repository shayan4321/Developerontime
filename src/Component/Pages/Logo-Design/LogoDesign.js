import React from 'react'
import Footer from '../../Footer';
import BannerSec from './BannerSec';
import Design_Con from '../../Design_Con';
import Contact_email from '../../Contact_email';
import Seeit from './Seeit';
import Budget from './Budget';
import Everything from './Everything';
const LogoDesign = () => {
  return (
    <div>
      <section className="logo-bnner">
        <div className="banner-sec">
          <div className="banner-pic">
            <div className="hover-effect-bann">
              <div className="row">
                <div className="column">
                  <div className="ItemCard">
                    <a className="ItemCard__dest cover" href="javascript:;"></a>
                    <figure className="ItemCard__thumb"> <img src="assets/images/ban-logos/002.jpg" height="340" width="510" alt=""/> <span className="shadow cover"></span> </figure>
                  </div>
                </div>
                <div className="column">
                  <div className="ItemCard">
                    <a className="ItemCard__dest cover" href="javascript:;"></a>
                    <figure className="ItemCard__thumb"> <img src="assets/images/ban-logos/005.jpg" height="340" width="510" alt=""/> <span className="shadow cover"></span> </figure>
                  </div>
                </div>
                <div className="column">
                  <div className="ItemCard">
                    <a className="ItemCard__dest cover" href="javascript:;"></a>
                    <figure className="ItemCard__thumb"> <img src="assets/images/ban-logos/009.jpg" height="340" width="510" alt=""/> <span className="shadow cover"></span> </figure>
                  </div>
                </div>
                <div className="column">
                  <div className="ItemCard">
                    <a className="ItemCard__dest cover" href="javascript:;"></a>
                    <figure className="ItemCard__thumb"> <img src="assets/images/ban-logos/004.jpg" height="340" width="510" alt=""/> <span className="shadow cover"></span> </figure>
                  </div>
                </div>
                <div className="column">
                  <div className="ItemCard">
                    <a className="ItemCard__dest cover" href="javascript:;"></a>
                    <figure className="ItemCard__thumb"> <img src="assets/images/ban-logos/001.jpg" height="340" width="510" alt=""/> <span className="shadow cover"></span> </figure>
                  </div>
                </div>
                <div className="column">
                  <div className="ItemCard">
                    <a className="ItemCard__dest cover" href="javascript:;"></a>
                    <figure className="ItemCard__thumb"> <img src="assets/images/ban-logos/015.jpg" height="340" width="510" alt=""/> <span className="shadow cover"></span> </figure>
                  </div>
                </div>
                <div className="column">
                  <div className="ItemCard">
                    <a className="ItemCard__dest cover" href="javascript:;"></a>
                    <figure className="ItemCard__thumb"> <img src="assets/images/ban-logos/018.jpg" height="340" width="510" alt=""/> <span className="shadow cover"></span> </figure>
                  </div>
                </div>
                <div className="column">
                  <div className="ItemCard">
                    <a className="ItemCard__dest cover" href="javascript:;"></a>
                    <figure className="ItemCard__thumb"> <img src="assets/images/ban-logos/006.jpg" height="340" width="510" alt=""/> <span className="shadow cover"></span> </figure>
                  </div>
                </div>
                <div className="column">
                  <div className="ItemCard">
                    <a className="ItemCard__dest cover" href="javascript:;"></a>
                    <figure className="ItemCard__thumb"> <img src="assets/images/ban-logos/011.jpg" height="340" width="510" alt=""/> <span className="shadow cover"></span> </figure>
                  </div>
                </div>
                <div className="column">
                  <div className="ItemCard">
                    <a className="ItemCard__dest cover" href="javascript:;"></a>
                    <figure className="ItemCard__thumb"> <img src="assets/images/ban-logos/010.jpg" height="340" width="510" alt=""/> <span className="shadow cover"></span> </figure>
                  </div>
                </div>
                <div className="column">
                  <div className="ItemCard">
                    <a className="ItemCard__dest cover" href="javascript:;"></a>
                    <figure className="ItemCard__thumb"> <img src="assets/images/ban-logos/017.jpg" height="340" width="510" alt=""/> <span className="shadow cover"></span> </figure>
                  </div>
                </div>
                <div className="column">
                  <div className="ItemCard">
                    <a className="ItemCard__dest cover" href="javascript:;"></a>
                    <figure className="ItemCard__thumb"> <img src="assets/images/ban-logos/016.jpg" height="340" width="510" alt=""/> <span className="shadow cover"></span> </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ban-txt-box">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="txt-container">
                    <div className="ban-txt">
                      <br/>
                        <br/>
                          <br/>
                            <br/>
                              <h4 className="upr-heading">Unique Logo Designs</h4>
                              <h3 className="main-heading">WITH THE RIGHT LOGO DESIGN, YOU CAN SPARK YOUR BUSINESS.</h3>
                              <p className="main-pera">We have the top designers and illustrators in the market to design creative logos for your brand for individual and business purpose. Our logos will guarantee</p>
                              <ul>
                                <li>Brand Recognition</li>
                                <li>Unique Brand Identity</li>
                                <li>Brand Loyalty</li>
                                <li>Competitive Edge</li>
                                <li>Timeless Designs</li>
                              </ul>
                              <div className="btnwrp">
                                <a className="btn-1" href="https://nexodesigns.com/let-get-started">Let's Get Started</a>
                                <a className="btn-2" onclick="setButtonURL();" href="javascript:;">Chat With Us</a>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
      </section>
      <BannerSec />
      <Design_Con />
      <Seeit />
      <Budget />
      <Everything/>
      <Contact_email/>
      <Footer/>
    </div>
  )
}
export default LogoDesign;
