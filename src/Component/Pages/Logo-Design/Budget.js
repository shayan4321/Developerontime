import React from 'react'
import {NavLink} from 'react-router-dom'
const Budget = () => {
  return (
    <div>
          <section className="pkagwerp">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="txtwrp">
                              <h4 className="upr-heading wow fadeInDown">Reasonable Prices</h4>
                              <h2 className="main-heading wow fadeInDown">That Fits Your Budget</h2>
                              <p className="main-pera">With affordable prices, we have exclusive digital art and design facilities, <br/> customized for your individual needs</p>
                          </div>
                          <div className="navwrp">

                          </div>
                      </div>
                  </div>
                  <div className="tabs current ser-port tabs-custm-web wbport">
                      <div className="row">
                          <div className="col-md-4">
                              <div className="pakge-box">
                                  <div className="pkge-name">
                                      <h4>Basic Logo</h4>
                                      <h2>$25 <span>$50</span></h2>
                                      <p>first month total payment $3,500 (3 months plan) $1,500 (on-going monthly payment)</p>
                                  </div>
                                  <div className="detailwrp">
                                      <ul className="list-scroll">
                                          <li>3 Custom Logo Design Concepts</li>
                                          <li>1 Dedicated Designer</li>
                                          <li>4 Revisions</li>
                                          <li>48 to 72 hours TAT</li>
                                          <li>100% Unique Design Guarantee</li>
                                          <li>100% Satisfaction Guarantee</li>
                                          <li>100% Money Back Guarantee *</li>
                                      </ul>
                                  </div>
                                  <div className="pakgedetail">
                                      <NavLink to="#">View Detail</NavLink>
                                  </div>
                                  <div className="btnwrp">
                                      <NavLink className="btn-1" to="#">Order Now</NavLink>
                                      <NavLink className="btn-2" to="#">Chat Now</NavLink>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="pakge-box">
                                  <div className="pkge-name">
                                      <h4>Professional Logo</h4>
                                      <h2>$99 <span>$198</span></h2>
                                      <p>first month total payment $3,500 (3 months plan) $1,500 (on-going monthly payment)</p>
                                  </div>
                                  <div className="detailwrp">
                                      <ul className="list-scroll">
                                          <li>UNLIMITED Logo Design Concepts</li>
                                          <li>By 4 Designers</li>
                                          <li>UNLIMITED Revisions</li>
                                          <li>Stationary Design (Business Card, Letterhead, Envelope)</li>
                                          <li>FREE MS Word Letterhead</li>
                                          <li>48 to 72 hours TAT</li>
                                          <li>All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)</li>
                                          <li>100% Satisfaction Guarantee</li>
                                      </ul>
                                  </div>
                                  <div className="pakgedetail">
                                      <NavLink to="#">View Detail</NavLink>
                                  </div>
                                  <div className="btnwrp">
                                      <NavLink className="btn-1" to="#">Order Now</NavLink>
                                      <NavLink className="btn-2" to="#">Chat Now</NavLink>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="pakge-box">
                                  <div className="pkge-name">
                                      <h4>Business Logo</h4>
                                      <h2>$199 <span>$398</span></h2>
                                      <p>first month total payment $3,500 (3 months plan) $1,500 (on-going monthly payment)</p>
                                  </div>
                                  <div className="detailwrp">
                                      <ul className="list-scroll">
                                          <li>UNLIMITED Logo Design Concepts</li>
                                          <li>By 8 Award Winning Designers</li>
                                          <li>UNLIMITED Revisions</li>
                                          <li>2 Stationary Design Sets (Business Card, Letterhead, Envelope)</li>
                                          <li>Icon Design</li>
                                          <li>Double Sided Flyer Design / Bi-Fold Brochure </li>
                                          <li>FREE MS Word Letterhead</li>
                                          <li>Free Email Signature</li>
                                      </ul>
                                  </div>
                                  <div className="pakgedetail">
                                      <NavLink to="#">View Detail</NavLink>
                                  </div>
                                  <div className="btnwrp">
                                      <NavLink className="btn-1" to="#">Order Now</NavLink>
                                      <NavLink className="btn-2" to="#">Chat Now</NavLink>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-12">
                              <div className="btndiv">
                                  <NavLink className="btn-1" to="#">Let's Get Started</NavLink>
                                  <NavLink className="btn-2" to="#">Chat With Us</NavLink>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>      
    </div>
  )
}

export default Budget