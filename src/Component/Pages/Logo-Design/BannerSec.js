import React from 'react'

const BannerSec = () => {
  return (
    <div>
      <section className="secndwrp">
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-auto">
              <div className="txtwrp">
                <h4 className="upr-heading">WITH THE RIGHT LOGO DESIGN, YOU CAN SPARK YOUR BUSINESS.</h4>
                <h2 className="main-heading">Designer Logos</h2>
                <p className="main-pera">The major goal of Developer on Time is to produce creative logo designs for businesses to help them stand out.You have no clue how important a logo design is for your business identity and how it may attract customers’ attention.We attempt to develop unmistakable, one-of-a-kind, and eye-catching logos designs for your company.Developer on Time takes a tailored approach, taking the time to learn about your company’s beliefs, goals, and stories.We understand how to combine creative designs with a forward-thinking approach.Let’s get together and create something unique that will help your company achieve the massive profits and success it truly deserves.</p>
              </div>
              <div className="btnwrp">
                <a className="btn-1" href="https://nexodesigns.com/let-get-started">Let's Get Started</a>
                <a className="btn-2" onclick="setButtonURL();" href="javascript:;">Chat With Us</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="imgwrp">
                <img src="assets/images/side-img/logo-secnd.png"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default BannerSec;
