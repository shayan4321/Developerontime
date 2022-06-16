import React from 'react'

const Lets_talk = () => {
  return (
      <>
          <section className="our-place-order text-center">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <img src="assets/images/cta-gif.gif" className="mic-img" alt="" data-aos="fade-up" data-aos-duration="2000"/>
                              <h2 className="main-heading">Let’s talk</h2>
                              <p className="main-pera">Let us know how we can assist you with your business goals. <br/> Let’s sort them out together</p>
                              <div className="btn-block">
                                  <a href="https://nexodesigns.com/let-get-started" className="btn-1">Let's Get Started</a>
                                  <a onclick="setButtonURL();" className="btn-2" href="javascript:;">Chat With Us</a>
                              </div>
                              <p data-aos="zoom-in" data-aos-duration="2000"><a href="tel:+6464308656">+1 646 430 8656 </a></p>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}
export default Lets_talk;
