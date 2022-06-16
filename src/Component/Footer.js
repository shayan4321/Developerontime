import React from 'react'

const Footer = () => {
    
  return (
    <div>
          <footer>
              <div className="container">
                  <div className="row">
                      <div className="col-md-4">
                          <div className="logowrp">
                              <img src="assets/images/logo-dark1.png"/>
                              <p>DOT is a Dedicated Digital Service Agency with A Wide Range of Expertise and Creative thinking that Meets the Needs of Entrepreneurs, Startups, Businesses & Brands.</p>
                                  <ul>
                                      <li>
                                      <a href="https://www.facebook.com/DeveloperOnTime"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                      </li>
                                      {/* <li>
                                          <a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                      </li> */}
                                      <li>
                                      <a href="https://www.linkedin.com/company/developer-on-time/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                      </li>
                                      {/* <li>
                                          <a href=""><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
                                      </li>
                                      <li>
                                          <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                      </li> */}
                                  </ul>
                          </div>
                      </div>
                      <div className="col-md">
                          <div className="navwrp">
                              <h4>Our Services</h4>
                              <ul>
                                  <li>
                                      <a href="">Website Design & Development</a>
                                  </li>
                                  <li>
                                      <a href="">Logo Design</a>
                                  </li>
                                  <li>
                                      <a href="">Branding</a>
                                  </li>
                                  <li>
                                      <a href="">Mobile App Development</a>
                                  </li>
                                  {/* <li>
                                      <a href="">SEO</a>
                                  </li> */}
                                  <li>
                                      <a href="">Blog</a>
                                  </li>
                                  {/* <li>
                                      <a href="">Illustration Design</a>
                                  </li>
                                  <li>
                                      <a href="">Marketing Collateral</a>
                                  </li>
                                  <li>
                                      <a href="">App Design</a>
                                  </li> */}
                                  <li>
                                      <a href="">SEO Services</a>
                                  </li>
                              </ul>
                          </div>
                      </div>

                      <div className="col-md">
                          <div className="navwrp">
                              <h4>Quick Links</h4>
                              <ul>
                                  <li>
                                      <a href="index.html">Home</a>
                                  </li>
                                  <li>
                                      <a href="about-us.html">About</a>
                                  </li>
                                  <li>
                                      <a href="our-portfolio.html">Portfolio</a>
                                  </li>
                                  <li>
                                      <a href="">Contact Us</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-md">
                          <div className="navwrp">
                              <h4>Contact Details</h4>
                              {/* <h4>USA</h4> */}
                              <ul>
                                  <li>
                                      <i class="fa fa-phone text-white mr-2"></i><a href="tel:+16464308656">Phone: +1 646 430 8656</a>
                                  </li>
                                  <li>
                                      <i class="fa fa-location-arrow text-white mr-2"></i><a href="javascript:;">Address: 99 Wall Street</a>
                                  </li>
                                  <li>
                                      <i className="fa fa-envelope text-white mr-2"></i><a href="javascript:;">  info@developerontime.com</a>
                                  </li>
                              </ul>

                          </div>
                          {/* <div className="navwrp">
                              <h4>Ireland</h4>
                              <ul>
                                  <li>
                                      <a href="tel:+35312118988">Phone: +353 1 211 8988</a>
                                  </li>
                                  <li>
                                      <a href="javascript:;">Address: Dublin, Ireland</a>
                                  </li>
                                  <li>
                                      <a href="javascript:;">Email: info@nexodesigns.com</a>
                                  </li>
                                  <li>
                                      <img src="assets/images/payment.png"/>
                                  </li>
                              </ul>
                          </div> */}
                      </div>
                  </div>
              </div>
          </footer>
          <div className="ftr-btm">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="txtwrp">
                              <p>Copyright 2022 © DeveloperOnTime</p>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="txtwrp">
                              <ul>
                                  <li>
                                      <a href="">Copyright 2022 © DeveloperOnTime</a>
                                  </li>
                                  {/* <li>
                                      <a href="">Privacy Policy</a>
                                  </li> */}
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Footer;
