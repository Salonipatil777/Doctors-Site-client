import React from "react";
import img1 from "../images/banner/img1.jpg";
import plusblue from "../images/shap/plus-blue.png";
import waveBlue from "../images/shap/wave-blue.png";
import circledots from "../images/shap/circle-dots.png";
import lineBg2 from "../images/background/line-bg2.png";
import news1 from "../images/social/news1.jpg";
import news2 from "../images/social/news2.jpg";
import news3 from "../images/social/news3.jpg";
import news4 from "../images/social/news4.jpg";
import news5 from "../images/social/news5.webp";
import news6 from "../images/social/news6.webp";
import trangleOrange from "../images/shap/trangle-orange.png";
import squaredots from "../images/shap/square-dots-orange.png";
import lineCircle from "../images/shap/line-circle-blue.png";
import { Link } from "react-router-dom";

const LatestNews = () => {
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
                <h1>Our Latest News</h1>
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
                    <li className="breadcrumb-item">Latest News</li>
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
        {/* <!-- Blog --> */}
        <section
          className="section-area section-sp1 blog-area"
          style={{
            backgroundImage: `url(${lineBg2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="heading-bx text-center">
              <h6 className="title-ext text-secondary">Latest News</h6>
              <h2 className="title">Our Latest News</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="card">
                  <img src={news1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      Hospitals posts drop in Q3 profit as digital.
                    </h5>
                    <p className="card-text">
                      To provide the best quality of dialysis to patients
                      suffering from kidney problems, Safdarjung Hospital has
                      started a new haemodialysis unit. The state-of-the-art
                      unit will be equipped.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={news2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      AIIMS Rishikesh conducts succesfull transport of TB
                      medicines
                    </h5>
                    <p className="card-text">
                      The vaccine was supposed to be available only in private
                      hospitals as the government did not procure it as well.
                      Bharat Biotech did not respond to a request for comment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={news3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      Covid Free, on corse with Integrity health model.
                    </h5>
                    <p className="card-text">
                      The company's top line grew at a strong clip of 17% ahead
                      of the consensus estimates but the bottom line declined
                      33% below Street expectations. The cash burn of ₹174 crore
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={news4} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      Hospitals Start offering nasal covid vaccine.
                    </h5>
                    <p className="card-text">
                      The symptoms are cough, nausea, vomiting, sore throat,
                      fever, body ache, and diarrhoea in some cases. The
                      infection usually lasts for about five to seven days. The
                      fever goes away.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={news5} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      TNN Private hospitals add critical care beds to meet
                      admission rush in India
                    </h5>
                    <p className="card-text">
                      Through this collaboration, the erstwhile Government
                      Maternity Hospital in Kanakapura Taluk has been rebuilt
                      and the new hospital has facilities, including oxygen and
                      medical gas pipelines, a sophisticated fire protection
                      alarm system.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={news6} alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      Pvt hosps to stay closed on Sat in protest against right
                      to health Bill.
                    </h5>
                    <p className="card-text">
                      A government document by the zila parishads revealed that
                      15 medical officers have been posted in 'Aam Aadmi'
                      clinics across the district. These officers were posted in
                      subsidiary health c.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="pt-img1 animate1" src={trangleOrange} alt="" />
          <img className="pt-img2 animate2" src={squaredots} alt="" />
          <img className="pt-img3 animate-rotate" src={lineCircle} alt="" />
          <img className="pt-img4 animate-wave" src={waveBlue} alt="" />
        </section>
      </div>
    </>
  );
};

export default LatestNews;
