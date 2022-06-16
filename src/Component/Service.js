import React from 'react'

const Service = () => {
  return (
      <>
          <section className="content srv-info-sec">
              <div className="container">
                  <div className="row cntr-content">
                      <div className="col-md-5 animate my-auto slideInLeft">
                          <div className="heading-sep">
                              <span className="seperator-left"></span>
                          </div>
                          <h2 className="main-heading">DESIGN & DEVELOPMENT OF A WEBSITE</h2>
                          <p className="main-pera">The Developer on Time takes pride in its ability to provide businesses of all sizes with bespoke website design services. We build designs that help your company expand faster.</p>
                          <a href="#" className="btn-1">DISCUSS YOUR IDEA</a>
                      </div>
                      <div className="col-md-7 plpx-70 animate bounceIn">
                          <div className="srv-info-wrap">
                              <div className="srv-item-wrap">
                                  <div className="srv-item-ico ico-one active">
                                      <i className="fa fa-laptop" aria-hidden="true"></i>
                                      <i className="fa fa-laptop" aria-hidden="true"></i>
                                  </div>
                                  <div className="srv-item-content active">
                                      <h5>RESULTS-ORIENTED SERVICES</h5>
                                      {/* <h3>Website Development</h3> */}
                                      <p className="list-scroll">We believe in keeping our work process efficient and transparent for our clients at Developer on Time our team offers digital services that are unique to each from design to development and branding, we’ll tailor our services to your specific requirements.as well as logo design we’re here to help whenever you need it service of design.</p>
                                  </div>
                              </div>

                              <div className="srv-item-wrap">
                                  <div className="srv-item-ico ico-two">
                                      <i className="fa fa-bullhorn" aria-hidden="true"></i>
                                      <i className="fa fa-bullhorn" aria-hidden="true"></i>
                                  </div>
                                  <div className="srv-item-content">
                                      <h5>OUR SERVICES</h5>
                                      <h3>Digital Marketing</h3>
                                      <p className="list-scroll">We consult, implement and execute digital marketing strategies for business to thrive in the digital world. PPC, social media marketing and email marketing are some of our offerings.</p>
                                  </div>
                              </div>

                              <div className="srv-item-wrap">
                                  <div className="srv-item-ico ico-three">
                                      <i className="fa fa-rocket" aria-hidden="true"></i>
                                      <i className="fa fa-rocket" aria-hidden="true"></i>
                                  </div>
                                  <div className="srv-item-content">
                                      <h5>OUR SERVICES</h5>
                                      <h3>SEO</h3>
                                      <p className="list-scroll">We develop SEO optimized content and other SEO strategies to make the website technically sound with the industry standards. It also improves the ranking of the website in the search resultand makes it easily accessible.</p>
                                  </div>
                              </div>

                              <div className="srv-item-wrap">
                                  <div className="srv-item-ico ico-four">
                                      <i className="fa fa-paint-brush" aria-hidden="true"></i>
                                      <i className="fa fa-paint-brush" aria-hidden="true"></i>
                                  </div>
                                  <div className="srv-item-content">
                                      <h5>OUR SERVICES</h5>
                                      <h3>Logo Design</h3>
                                      <p className="list-scroll">We design perfect and unique logos for our clients. Our logos are customized and stand out due to their designs, attention to detail and color selection.</p>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </section>
      </>
  )
}
export default Service;
