import React from "react";
import "../gallary.css";
import img1 from "../images/banner/img1.jpg";
import plusblue from "../images/shap/plus-blue.png";
import waveBlue from "../images/shap/wave-blue.png";
import circledots from "../images/shap/circle-dots.png";
import g1 from "../images/gallary/g1.jpg";
import g2 from "../images/gallary/g2.jpg";
import g3 from "../images/gallary/g3.jpg";
import g4 from "../images/gallary/g4.jpg";
import g5 from "../images/gallary/g5.jpg";
import g6 from "../images/gallary/g6.jpg";
import g7 from "../images/gallary/g7.jpg";
import g8 from "../images/gallary/g8.jpg";
import g9 from "../images/gallary/g9.jpg";
import g10 from "../images/gallary/g10.jpg";
import g11 from "../images/gallary/g11.jpg";
import g12 from "../images/gallary/g12.jpg";
import g13 from "../images/gallary/g13.jpg";
import g14 from "../images/gallary/g14.jpg";
import g15 from "../images/gallary/g15.jpg";
import g16 from "../images/gallary/g16.jpg";
import g17 from "../images/gallary/g17.jpg";
import g18 from "../images/gallary/g18.jpg";
import g19 from "../images/gallary/g19.jpg";
import g20 from "../images/gallary/g20.jpg";
import g21 from "../images/gallary/g21.jpg";
import g22 from "../images/gallary/g22.jpg";
import g23 from "../images/gallary/g23.jpg";
import g24 from "../images/gallary/g24.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Gallary = () => {
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    image.addEventListener("click", (e) => {
      lightbox.classList.add("active");
      const img = document.createElement("img");
      img.src = image.src;
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
  });
  return (
    <>
      <div className="page-content bg-white">
      <Helmet>
          <title>Explore Our Gallary</title>
          <meta name="description" content="Moments in doctors life."/>
        </Helmet>
        {/* <!-- Inner Banner --> */}
        <div className="banner-wraper">
          <div
            className="page-banner"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>Our Gallary</h1>
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
                    <li className="breadcrumb-item">Gallary</li>
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
      </div>
      <div className="grid mx-lg-5">
        <img src={g1} alt="" />

        <img src={g2} alt="" />

        <img src={g3} alt="" />

        <img src={g4} alt="" />

        <img src={g5} alt="" />

        <img src={g6} alt="" />

        <img src={g7} alt="" />

        <img src={g8} alt="" />

        <img src={g9} alt="" />

        <img src={g10} alt="" />

        <img src={g11} alt="" />

        <img src={g12} alt="" />

        <img src={g13} alt="" />

        <img src={g14} alt="" />
        <img src={g17} alt="" />
        <img src={g15} alt="" />
        <img src={g16} alt="" />
        <img src={g18} alt="" />
        <img src={g20} alt="" />
        <img src={g19} alt="" />
        <img src={g21} alt="" />
        <img src={g24} alt="" />
        <img src={g23} alt="" />
        <img src={g22} alt="" />
      </div>
    </>
  );
};

export default Gallary;
