import React from "react";
import trangleOrange from "../images/shap/trangle-orange.png";
import plusblue from "../images/shap/plus-blue.png";
import linecircleSmall from "../images/shap/line-circle-blue.png";
import squareDot from "../images/shap/square-dots-orange.png";
import waveBlue from "../images/shap/wave-blue.png";
import circledots from "../images/shap/circle-dots.png";
import dr3 from "../images/dr3.jpg";
import dctr1 from "../images/dr1.jpg";
import dctr5 from "../images/team/dctr5.jpg";
import dctrr1 from "../images/team/dctr1.jpg";
import dctrr2 from "../images/team/dctr2.jpg";
import dctrr3 from "../images/team/dctr3.jpg";
import manager1 from "../images/team/manager1.jpg";
import manager3 from "../images/team/manager3.jpg";
import manager4 from "../images/team/manager4.jpg";
import img1 from "../images/banner/img1.jpg";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <>
      <div className="page-content bg-white">
        {/* <!-- Inner Banner --> */}
        <div className="banner-wraper">
          <div
            className="page-banner"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>Our Team</h1>
                {/* <!-- Breadcrumb row --> */}
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-home"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Our Team
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
            <img className="pt-img2 animate2" src={circledots} alt="" />
            <img className="pt-img3 animate-rotate" src={plusblue} alt="" />
          </div>
          {/* <!-- Breadcrumb row END --> */}
        </div>
        {/* <!-- Inner Banner end --> */}

        {/* <!-- Team --> */}
        <section className="section-area section-sp1 team-wraper">
          <div className="container">
            <div className="heading-bx text-center">
              <h2 className="title">Our Doctors Team</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 mb-30">
                <div className="team-member">
                  <div className="team-media">
                    <img src={dr3} alt="" />
                  </div>
                  <div className="team-info">
                    <div className="team-info-comntent">
                      <h4 className="title">Dr. Gaurav Gupta</h4>
                      <span className="text-secondary">Dentist</span>
                    </div>
                    <ul className="social-media">
                      <li>
                        <Link target="blank" to="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.linkedin.com/">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-30">
                <div className="team-member active">
                  <div className="team-media">
                    <img src={dctr5} alt="" />
                  </div>
                  <div className="team-info">
                    <div className="team-info-comntent">
                      <h4 className="title">Dr.Sunita More</h4>
                      <span className="text-secondary">Chiropractor</span>
                    </div>
                    <ul className="social-media">
                      <li>
                        <Link target="blank" to="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.linkedin.com/">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-30">
                <div className="team-member">
                  <div className="team-media">
                    <img src={dctr1} alt="" />
                  </div>
                  <div className="team-info">
                    <div className="team-info-comntent">
                      <h4 className="title">Dr.Shekhar Kulkarni</h4>
                      <span className="text-secondary">Cardiologist</span>
                    </div>
                    <ul className="social-media">
                      <li>
                        <Link target="blank" to="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.linkedin.com/">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-30">
                <div className="team-member">
                  <div className="team-media">
                    <img src={dctrr1} alt="" />
                  </div>
                  <div className="team-info">
                    <div className="team-info-comntent">
                      <h4 className="title">Dr. Nandkishor Kabra</h4>
                      <span className="text-secondary">Dentist</span>
                    </div>
                    <ul className="social-media">
                      <li>
                        <Link target="blank" to="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.linkedin.com/">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-30">
                <div className="team-member active">
                  <div className="team-media">
                    <img src={dctrr2} alt="" />
                  </div>
                  <div className="team-info">
                    <div className="team-info-comntent">
                      <h4 className="title">Dr. Shobha Sharma</h4>
                      <span className="text-secondary">Chiropractor</span>
                    </div>
                    <ul className="social-media">
                      <li>
                        <Link target="blank" to="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.linkedin.com/">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-30">
                <div className="team-member">
                  <div className="team-media">
                    <img src={dctrr3} alt="" />
                  </div>
                  <div className="team-info">
                    <div className="team-info-comntent">
                      <h4 className="title">Dr. Sachin Shah</h4>
                      <span className="text-secondary">Cardiologist</span>
                    </div>
                    <ul className="social-media">
                      <li>
                        <Link target="blank" to="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.linkedin.com/">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="pt-img1 animate1" src={trangleOrange} alt="" />
          <img className="pt-img2 animate2" src={squareDot} alt="" />
          <img
            className="pt-img3 animate-rotate"
            src={linecircleSmall}
            alt=""
          />
          <img className="pt-img4 animate-wave" src={waveBlue} alt="" />
          <img className="pt-img5 animate-wave" src={circledots} alt="" />
        </section>

        {/* <!--Management Team --> */}
        <section className="section-area section-sp3 team-wraper">
          <div className="container">
            <div className="heading-bx text-center">
              <h2 className="title">Our Management Team</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 mb-30">
                <div className="team-member">
                  <div className="team-media">
                    <img src={manager1} alt="" />
                  </div>
                  <div className="team-info">
                    <div className="team-info-comntent">
                      <h4 className="title">Dr.Raghav Paranjape</h4>
                      <span className="text-secondary">
                        Group CEO, Raj Hospitals
                      </span>
                      <p>
                        Dr. Raghav Paranjape has a degree in Anaesthesiology and
                        was a practicing physician in Mumbai for more than 30
                        years.Since 2018, Dr. Paranjape has been CEO of Raj
                        Hospital.
                      </p>
                    </div>
                    <ul className="social-media">
                      <li>
                        <Link target="blank" to="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.linkedin.com/">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-30">
                <div className="team-member active">
                  <div className="team-media">
                    <img src={manager3} alt="" />
                  </div>
                  <div className="team-info">
                    <div className="team-info-comntent">
                      <h4 className="title">Mr. Anil Agarwal</h4>
                      <span className="text-secondary">
                        Facility Director, Raj Hospital
                      </span>
                      <p>
                        Mr. Anil Agarwal is a Chartered Accountant and holds
                        Bachelor’s degree in Commerce from University of Mumbai
                        and has more than 18 years of experience. Currently in
                        Surya Hospitals
                      </p>
                    </div>
                    <ul className="social-media">
                      <li>
                        <Link target="blank" to="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.linkedin.com/">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-30">
                <div className="team-member">
                  <div className="team-media">
                    <img src={manager4} alt="" />
                  </div>
                  <div className="team-info">
                    <div className="team-info-comntent">
                      <h4 className="title">Dr.Nivedita Verma</h4>
                      <span className="text-secondary">
                        Facility Director at Raj Hospital
                      </span>
                      <p>
                        Dr. Nivedita is a seasoned healthcare professional with
                        an experience of over 15 years in healthcare sector.
                        Through her leadership, people focused approach and
                        strategic acumen;
                      </p>
                    </div>
                    <ul className="social-media">
                      <li>
                        <Link target="blank" to="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.linkedin.com/">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="blank" to="https://www.instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="pt-img1 animate1" src={trangleOrange} alt="" />
          <img className="pt-img2 animate2" src={squareDot} alt="" />
          <img
            className="pt-img3 animate-rotate"
            src={linecircleSmall}
            alt=""
          />
          <img className="pt-img4 animate-wave" src={waveBlue} alt="" />
          <img className="pt-img5 animate-wave" src={circledots} alt="" />
        </section>
      </div>
    </>
  );
};

export default Team;
