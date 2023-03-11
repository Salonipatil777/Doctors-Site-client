import React from 'react'
import plusblue from '../images/shap/plus-blue.png'
import logo from '../images/Raj-hospital.png'
import footer from '../images/background/footer.jpg'
import twitter from '../images/social/twitter.png'
import instagram from '../images/social/instagram.png'
import linkedin from '../images/social/linkedin.png'
import facebook from '../images/social/facebook.png'
import waveBlue from '../images/shap/wave-blue.png'
import circledots from '../images/shap/circle-dots.png'

const Footer = () => {
  return (
    <>
     {/* <!-- Footer ==== --> */}
     <footer className="footer" style={{backgroundImage: {footer}}}>
        {/* <!-- Footer Top --> */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="widget widget_info">
                  <div className="footer-logo">
                    <a href="index.html"><img src={logo} alt="" /></a>
                  </div>
                  <div className="ft-contact">
                    <p>
                    <ul>
                      <li>Find A Doctor</li>
                      <li>Service Excellence</li>
                      <li>Health Check Ups</li>
                      <li> Patient Testimonials</li>
                    </ul>
                    </p>
                    <div className="contact-bx">
                      <div className="icon"><i className="fas fa-phone-alt"></i></div>
                      <div className="contact-number">
                        <span>Contact Us</span>
                        <h4 className="number">+(91)9112666699</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-6">
                <div className="widget footer_widget ml-50">
                  <h3 className="footer-title">Quick Links</h3>
                  <ul>
                    <li>
                      <a href="about-us.html"><span>About Us</span></a>
                    </li>
                    <li>
                      <a href="services.html"><span>Services</span></a>
                    </li>
                    <li>
                      <a href="booking.html"><span>Booking</span></a>
                    </li>
                    <li>
                      <a href="faq.html"><span>FAQ</span></a>
                    </li>
                    <li>
                      <a href="blog-grid.html"><span>Blogs</span></a>
                    </li>
                    <li>
                      <a href="team.html"><span>Our Team</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-6">
                <div className="widget footer_widget">
                  <h3 className="footer-title">Our Service</h3>
                  <ul>
                    <li>
                      <a href="service-detail.html"><span>Dental Care</span></a>
                    </li>
                    <li>
                      <a href="service-detail.html"><span>Cardiac Clinic</span></a>
                    </li>
                    <li>
                      <a href="service-detail.html"><span>Massege Therapy</span></a>
                    </li>
                    <li>
                      <a href="service-detail.html"><span>Cardiology</span></a>
                    </li>
                    <li>
                      <a href="service-detail.html"><span>Precise Diagnosis</span></a>
                    </li>
                    <li>
                      <a href="service-detail.html"><span>Ambulance Services</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="widget widget_form">
                  <h3 className="footer-title">Subscribe</h3>
                  <form className="subscribe-form subscription-form mb-30"
                    action="https://meditro.themetrades.com/html/demo/script/mailchamp.php" method="post">
                    <div className="ajax-message"></div>
                    <div className="input-group">
                      <input name="email" required="required" className="form-control" placeholder="Email Address"
                        type="email" />
                    </div>
                    <button name="submit" value="Submit" type="submit" className="btn btn-secondary shadow w-100">
                      Subscribe Now
                    </button>
                  </form>
                  <div className="footer-social-link">
                    <ul>
                      <li>
                        <a target="blank" href="https://www.facebook.com/"><img src={facebook}
                            alt="" /></a>
                      </li>
                      <li>
                        <a target="blank" href="https://twitter.com/"><img src={twitter}
                            alt="" /></a>
                      </li>
                      <li>
                        <a target="blank" href="https://www.instagram.com/"><img src={instagram}
                            alt="" /></a>
                      </li>
                      <li>
                        <a target="blank" href="https://www.linkedin.com/"><img src={linkedin}
                            alt="" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer bottom --> */}
        <div className="container">
          <div className="footer-bottom">
            <div className="row">
              <div className="col-12 text-center">
                <p className="copyright-text">
                  Copyright © 2023 Raj Hospitals Enterprise Ltd. All Rights Reserved.Developed by
                  <a href="https://upconn.in/">UPCONN</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer-shape --> */}
        <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
        <img className="pt-img2 animate1" src={circledots} alt="" />
        <img className="pt-img3 animate-rotate" src={plusblue} alt="" />
        <img className="pt-img4 animate-wave" src={waveBlue} alt="" />
      </footer>
      {/* <!-- Footer END ==== --> */}
    </>
  )
}

export default Footer
