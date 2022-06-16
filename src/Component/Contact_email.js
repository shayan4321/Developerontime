import React from 'react'

const Contact_email = () => {
  return (
    <div>
          <section className="btmform">
              <div className="container">
                  <div className="row">
                      <div className="col-sm-12">
                          <div className="txtwrp text-center">
                              <h2 className="main-heading">ALRIGHT! LET'S GET STARTED.</h2>
                              <p className="main-pera">Fill out the form and provide all of your specifications to receive a free expert consultation.</p>
                              <p className="main-pera">Developer on Time is dedicated to providing exceptional service and promises to make your experience one to remember.<br/> Allow us to assist you in standing out and realizing your full potential.</p>
                          </div>
                      </div>
                      <div className="col-sm-12 d-flex">
                          <div className="sec-left">
                              <div className="wrapper">
                                  <div className="second-sec-cont">
                                      <h2 className="wow fadeInUp"><b>Feel free to make a call request now</b></h2>
                                      <p className="main-pera">The Nexo Designs is committed to excellence and vows to make your experience memorable and <br/> remarkable. Let us help you in standing out and reaching the maximum of your potential.</p>
                                  </div>

                                  <form id="" action="" method="">
                                      <div className="alert alert-danger error"></div>
                                      <div className="row">
                                          <div className="col-sm-6">
                                              <div className="field">
                                                  <input type="text" placeholder="Name" name="Name" required/>
                                              </div>
                                              <div className="field">
                                                  <input type="email" placeholder="Email Address" name="Email" required/>
                                              </div>
                                              <div className="field">
                                                          <input type="number" name="Number" id="" className="" placeholder="Phone" required/>

                                                                          </div>
                                                                          <div className="field">
                                                                              <select name="Package" id="package_id" className="package_id">
                                                                                  <option value="">I Am Interested In</option>
                                                                                  <option value="Logo Design">Logo Design</option>
                                                                                  <option value="Website Development">Website Development</option>
                                                                                  <option value="Video Animation">Video Animation</option>
                                                                                  <option value="E-Commerce">E-Commerce</option>
                                                                                  <option value="Branding">Branding</option>
                                                                              </select>
                                                                          </div>
                                                                      </div>
                                                                      <div className="col-sm-6">
                                                                          <div className="field-msg">
                                                                              <textarea placeholder="Leave Your Message" name="message" ></textarea>
                                                                          </div>
                                                                          <div className="field-btn">
                                                                              <input type="submit"/>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </form>
                                                          </div>
                                                      </div>
                                                      <div className="sec-right">
                                                          <div className="ver-cta">
                                                              <div className="box">
                                                                  <p>For any inquiries call now</p>
                                                                  <div className="imgwrp"><i className="fa fa-phone" aria-hidden="true"></i></div>
                                                                  <span>(888) 505-7839</span>
                                                              </div>
                                                          </div>
                                                      </div>
                                              </div>
                                          </div>
                                      </div>
                                  </section>      
    </div>
  )
}
export default Contact_email;
