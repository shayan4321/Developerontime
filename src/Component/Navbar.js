import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
        
    
    return (
        <div>
            <noscript>
                <div id="jqcheck"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB60lEQVQ4T2NkwAHePzrxf3ebL1jWp/0oA5egGiM2pVgFQQq31uj/N/ANZvj+8T3D7aNHGDwbTxNvwKtbO/9f3dLHYJ+axfDn5w+GI/NnMRhFtTEISJtjGIIh8Pv39/87ak0ZzCLiGMRUNMCufnLxDMOlrZsY3JtOMrCwsKPowTDg3tGZ/59f2sVgFRvPkO+bAzZgwsZJDEcXzWNQtIlikDGIwG3Az+9v/+9qsGOwTc1h4JeQhhswcfMUhrcP7zEcXzyXwb3xMAMbuwDcEBTTzi7P/s/M8IFB3zccbDPMBSADQODs2sUMzFwyDIah/ZgGfHt/7/+BvmAGm+RsBl4RMawGfHr5jOHowlkMjiUbGDj55MCGwE060Of1X0RZi0Hb2Q4e3eguAElc2X2A4e2DmwwOhVsRBnx6cfH/yXm5DFZxyQxcAoJ4Dfj24T3DsUVzGcwSJjLwSxkygk3ZVmv4X805gkHZRBNXwkQRv3/+NsP1nUsYvFvOMzI+PLXo/73DSxgsouIYOHj5UBRi8wJIwY8vnxlOLV/CIGcewsC4vkDhv01yLoOIoiqG7bgMACn88Owxw8HpvQyMGwqV/vs19TMwQnxDEthYW8DAeGCC3/9XN46TpBGmWEzDkoHx06dP/z9//kyWAby8vAwAcza2SBMOSCMAAAAASUVORK5CYII=" alt="No Script" /> Javascript is disabled. Please enable it for better working experience.</div>
            </noscript>
            <div class="mobile-nav"> <NavLink to="/" class="logo-main"> <img src="assets/images/logo-dark1.png" alt="*" /></NavLink>
                <nav>

                    <ul class="unstyled mainnav pbpx-15">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="#">Services <i class="xicon icon-angle-down"></i></NavLink>
                            <ul class="firstlevel unstyled">
                                <li><NavLink to="/logo-design">Logo Design</NavLink></li>
                                <li><NavLink to="https://nexodesigns.com/creative-copywriting">Creative Copywriting</NavLink></li>
                                <li><NavLink to="/website-design-development">Website Development</NavLink></li>
                                <li><NavLink to="https://nexodesigns.com/mobile-application">Mobile App Development</NavLink></li>
                                <li><NavLink to="https://nexodesigns.com/seo-services">SEO Services</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="#">Portfolios</NavLink>

                        </li>
                        <li><NavLink to="#">About Us</NavLink></li>
                        <li><NavLink to="#">Contact Us</NavLink></li>

                    </ul>




                </nav>
            </div>
            <main class="app-container">
                {/* <!-- Mobile Navigation Button Start--> */}
                <div class="mobile-nav-btn"> <span class="lines" id="lines"></span> </div></main>
            <header className="header-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-9">
                            <div className="upr-navwrp">
                                {/* <ul>
                                    <li>
                                        <NavLink to="tel:+16464308656"><i className="fa fa-phone" aria-hidden="true"></i>+92 3312432779</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="mailto:info@nexodesigns.com">info@developerontime.com</NavLink>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="logowrp">
                                <NavLink className="" to="/">
                                    <img className="lgo-drk"  src="assets/images/logo-dark1.png" alt="logo-dark"/>
                                    {/* <img className="lgo-lit" src="assets/images/logo-white.png" alt="logo-white"/> */}
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-10 my-auto">
                            <div className="navwrp">
                                <ul>
                                    <li><NavLink to="/">Home</NavLink></li>
                                        <li className="ser">
                                            <NavLink to="#"> Services<i className="fa fa-caret-down" aria-hidden="true"></i></NavLink>
                                            <div className="dropwrep">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="manuwrp">
                                                                <ul>
                                                                    <li>
                                                                        <span>
                                                                            <img className="lazy" src="assets/images/logo-icon.png" alt="logo-icon"/>
                                                                        </span>
                                                                        <NavLink to="/logo-design">Logo Design</NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <span>
                                                                            <img className="lazy"  src="assets/images/copywriting-icon.png" alt="copywriting-icon"/>
                                                                        </span>
                                                                        <NavLink to="">Creative Copywriting</NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <span>
                                                                            <img className="lazy"  src="assets/images/web-development-icon.png" alt="web-development-icon"/>
                                                                        </span>
                                                                        <NavLink to="/website-design-development">Website Development</NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <span>
                                                                            <img className="lazy" src="assets/images/digital-marketing-icon.png" alt="digital-marketing-icon"/>
                                                                        </span>
                                                                        <NavLink to="">Digital Marketing</NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <span>
                                                                            <img className="lazy" src="assets/images/ecommerce-icon.png" alt="ecommerce-icon"/>
                                                                        </span>
                                                                        <NavLink to="">Ecommerce Web Solutions</NavLink>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="manuwrp">
                                                                <ul>

                                                                    <li>
                                                                        <span>
                                                                            <img className="lazy" src="assets/images/motion-graphics-icon.png" alt="motion-graphics-icon"/>
                                                                        </span>
                                                                        <NavLink to="">Motion Graphics</NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <span>
                                                                            <img className="lazy" src="assets/images/illustration-icon.png" alt="illustration-icon"/>
                                                                        </span>
                                                                        <NavLink to="">Illustration Design</NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <span>
                                                                            <img className="lazy" src="assets/images/marketing-collateral-icon.png" alt="marketing-collateral-icon"/>
                                                                        </span>
                                                                        <NavLink to="">Marketing Collateral</NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <span>
                                                                            <img className="lazy" src="assets/images/mobile-app-icon.png" alt="mobile-app-icon"/>
                                                                        </span>
                                                                        <NavLink to="">App Design</NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <span>
                                                                            <img className="lazy" src="assets/images/seo-icon.png" alt="seo-icon.png"/>
                                                                        </span>
                                                                        <NavLink to="">SEO Services</NavLink>
                                                                    </li>
                                                                </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <NavLink to="">Portfolios</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="">About Us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="">Contact Us</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </header >
        </div>
    

            
               
            
       
    )
}
export default Navbar;