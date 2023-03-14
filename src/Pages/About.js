import React from 'react'
import trangleOrange from '../images/shap/trangle-orange.png'
import plusOrange from '../images/shap/plus-orange.png'
import plusblue from '../images/shap/plus-blue.png'
import waveOrange from '../images/shap/wave-orange.png'
import circleSmallBlue from '../images/shap/circle-small-blue.png'
import linecircleSmall from '../images/shap/line-circle-blue.png'
import squareDot from '../images/shap/square-dots-orange.png'
import squareblue from '../images/shap/square-blue.png'
import g1 from '../images/gallary/g1.jpg'
import dr1 from '../images/about/dr1.png'
import dr2 from '../images/about/dr2.webp'
import circleOrange2 from '../images/shap/circle-orange-2.png'
import waveBlue from '../images/shap/wave-blue.png'
import circledots from '../images/shap/circle-dots.png'
import shape from '../images/testimonials/shape.png'
import dr3 from '../images/dr3.jpg'
import dctr1 from '../images/dr1.jpg'
import dctr5 from '../images/team/dctr5.jpg'
import img1 from '../images/banner/img1.jpg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'


const About = () => {
  return (
    <>
    <div className="page-content bg-white">
    <Helmet>
          <title>About Us</title>
          <meta name="description" content="About Raj Hospital"/>
        </Helmet>
    {/* <!-- Inner Banner --> */}
    <div className="banner-wraper">
        <div className="page-banner" style={{backgroundImage: `url(${img1})`
}}>
            <div className="container">
                <div className="page-banner-entry text-center">
                    <h1>About Us</h1>
                    {/* <!-- Breadcrumb row --> */}
                    <nav aria-label="breadcrumb" className="breadcrumb-row">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
            <img className="pt-img2 animate2" src={circledots} alt=""/>
            <img className="pt-img3 animate-rotate" src={plusblue} alt=""/>
        </div>
        {/* <!-- Breadcrumb row END --> */}
    </div>
    {/* <!-- Inner Banner end --> */}
         {/* <!-- About Us --> */}
    <section className="section-area section-sp3 team-wraper">
        <div className="container">
            <div className="heading-bx text-center">
                <h6 className="title-ext text-secondary">ABOUT US</h6>
                <h2 className="title">35+ Years of Excellence in Women and Child Care</h2>
            </div>
            <div className="row justify-content-center mx-lg-5 mx-sm-3 mx-md-3">
                <p className="about-text">Raj Hospitals have been a pioneer in offering modern healthcare services for Women & Children in India since 1985. Over the last three decades we have regularly embraced the latest advancements in medical science and introduced cutting-edge medical technology to offer ‘best-in-className’ clinical outcomes and patient experiences.

        Patients have shown a relentless faith in our services and that has given us the confidence to grow from a modest 22 bedded pediatric nursing home in Mumbai more than three decades ago to a chain of multiple hospitals offering standardised care to women and children in the country. We have further expanded our footprints in the city of Pune and Jaipur to offer similar services to our patients.
        
        With a view to spread the knowledge and clinical experience we run various academic courses in Paediatrics, Gynaecology and Obstetrics. We are one of the largest institutes running such government approved academic courses in Western India. You can find more information on this in the Academics section.
        
        While Raj Hospitals makes rapid progress in widening our reach, we are simultaneously committed and focused on further elevating our patient experience to greater levels of satisfaction, and increasing our services by introducing more super-specialty services that makes us a leading name in neonatal & paediatric care, and the best in className women care facilities.
        
        Some of the ‘state-of-the-art’ facilities include – India’s largest level 3 NICU facility, dedicated neonatal ambulances for free transport of neonates, fertility treatment for women, specialty services in gynaecology, Gynec-oncology, high risk Obstetrics, in-house foetal medicine centre and experts, in-utero transfer facility, state-of-the art operating rooms and private suites, experts for OPD consultations, research and education for new and innovative health treatments.</p>
            </div>
        </div>
        <img className="pt-img1 animate1" src={trangleOrange} alt=""/>
        <img className="pt-img2 animate2" src={squareDot} alt=""/>
        <img className="pt-img3 animate-rotate" src={linecircleSmall} alt=""/>
        <img className="pt-img4 animate-wave" src={waveBlue} alt=""/>
        <img className="pt-img5 animate-wave" src={circledots} alt=""/>
    </section>
    {/* <!-- About us --> */}
      {/* <!-- About us --> */}
      <section className="section-sp1 about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30">
              <div className="about-thumb-area">
                <ul>
                  <li><img className="about-thumb1" src={g1} alt=""/></li>
                  <li><img className="about-thumb2" src={dr1} alt=""/></li>
                  <li><img className="about-thumb3" src={dr2} alt=""/></li>
                  <li>
                    <div className="exp-bx">20<span>Year Experience</span></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="heading-bx">
                <h6 className="title-ext text-secondary">About Us</h6>
                <h2 className="title">The Great Place Of Medical Hospital Center</h2>
                <p>We provide the special tips and advice’s of heath care treatment and high level of best technology
                  involve in the our hospital.</p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                  <div className="feature-container feature-bx1 feature1">
                    <div className="icon-md">
                      <span className="icon-cell">
                        <svg enable-background="new 0 0 512 512" height="85" viewBox="0 0 512 512" width="85"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="m509.82 327.343-21.991-27.599c-1.896-2.381-4.775-3.768-7.82-3.768h-7.712l-74.353-93.385c-1.897-2.383-4.777-3.771-7.823-3.771h-22.862v-22.765c0-19.014-15.43-34.483-34.396-34.483h-97.678v-4.552c0-28.428-23.127-51.555-51.555-51.555s-51.555 23.127-51.555 51.555v4.552h-97.678c-18.966 0-34.397 15.47-34.397 34.484v251.241c0 5.523 4.478 10 10 10h22.279c4.628 22.794 24.758 39.999 48.815 39.999s44.186-17.205 48.814-39.999h250.37c4.628 22.794 24.757 39.999 48.814 39.999s44.187-17.205 48.815-39.999h24.093c5.522 0 10-4.477 10-10v-93.722c0-2.264-.769-4.461-2.18-6.232zm-124.52-108.523 61.432 77.156h-79.474v-77.156zm-233.226-81.799c0-17.399 14.155-31.555 31.555-31.555s31.555 14.156 31.555 31.555v4.552h-63.109v-4.552zm-132.074 39.035c0-7.986 6.459-14.483 14.397-14.483h298.464c7.938 0 14.396 6.497 14.396 14.483v241.241h-217.35c-4.628-22.794-24.757-39.999-48.814-39.999s-44.187 17.205-48.815 39.999h-12.278zm61.094 281.24c-16.44 0-29.816-13.458-29.816-29.999s13.376-29.999 29.816-29.999 29.815 13.458 29.815 29.999-13.375 29.999-29.815 29.999zm347.998 0c-16.44 0-29.815-13.458-29.815-29.999s13.375-29.999 29.815-29.999 29.816 13.458 29.816 29.999-13.376 29.999-29.816 29.999zm62.908-39.999h-14.093c-4.628-22.794-24.758-39.999-48.815-39.999s-44.186 17.205-48.814 39.999h-13.02v-101.321h107.932l16.81 21.096z" />
                          <path
                            d="m183.629 66.808c5.522 0 10-4.477 10-10v-12.104c0-5.523-4.478-10-10-10s-10 4.477-10 10v12.104c0 5.523 4.477 10 10 10z" />
                          <path
                            d="m236.764 94.969c1.934 1.829 4.404 2.736 6.871 2.736 2.652 0 5.299-1.048 7.266-3.127l10.626-11.229c3.796-4.011 3.621-10.341-.391-14.137s-10.341-3.621-14.137.391l-10.626 11.229c-3.796 4.012-3.621 10.341.391 14.137z" />
                          <path
                            d="m116.358 94.579c1.967 2.078 4.613 3.126 7.266 3.126 2.467 0 4.938-.907 6.871-2.737 4.012-3.796 4.187-10.125.391-14.137l-10.627-11.229c-3.796-4.011-10.126-4.187-14.137-.39-4.012 3.796-4.187 10.125-.391 14.137z" />
                          <path d="m90.896 216.592h184.372v113.287h-184.372z" fill="#b2f0fb" />
                        </svg>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="ttr-title">Emergency Help</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                  <div className="feature-container feature-bx1 feature2">
                    <div className="icon-md">
                      <span className="icon-cell">
                        <svg enable-background="new 0 0 512 512" height="85" viewBox="0 0 512 512" width="85"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="m351.524 124.49h-37.907v-37.907h-44.657v37.907h-37.906v44.657h37.906v37.907h44.657v-37.907h37.907z"
                            fill="#a4fcc4" />
                          <path
                            d="m291.289 279.415c73.114 0 132.597-59.482 132.597-132.597s-59.483-132.596-132.597-132.596-132.598 59.482-132.598 132.596 59.484 132.597 132.598 132.597zm0-245.193c62.086 0 112.597 50.511 112.597 112.597s-50.511 112.597-112.597 112.597c-62.087 0-112.598-50.511-112.598-112.597s50.511-112.597 112.598-112.597z" />
                          <path
                            d="m502 267.736c-32.668 0-59.245 26.577-59.245 59.245v13.605h-240.266v-19.048c0-23.625-19.221-42.846-42.846-42.846h-90.398v-17.584c0-32.668-26.577-59.245-59.245-59.245-5.522 0-10 4.478-10 10v275.914c0 5.522 4.478 10 10 10h49.245c5.522 0 10-4.478 10-10v-39.327h373.51v39.327c0 5.522 4.478 10 10 10h49.245c5.522 0 10-4.478 10-10v-210.041c0-5.522-4.478-10-10-10zm-342.356 30.957c12.598 0 22.846 10.249 22.846 22.846v19.048h-113.245v-41.894zm-110.399 179.085h-29.245v-254.623c16.812 4.434 29.245 19.77 29.245 37.954zm20-49.327v-67.864h373.51v67.864zm422.755 49.327h-29.245v-150.797c0-18.185 12.434-33.521 29.245-37.954z" />
                        </svg>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="ttr-title">Qualified Doctors</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                  <div className="feature-container feature-bx1 feature3">
                    <div className="icon-md">
                      <span className="icon-cell">
                        <svg enable-background="new 0 0 512 512" height="85" viewBox="0 0 512 512" width="85"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="m397.886 191.161c-3.545-4.235-9.852-4.797-14.087-1.252-4.235 3.544-4.797 9.851-1.253 14.086 26.684 31.893 41.165 72.339 40.775 113.888-.886 94.681-79.215 172.782-174.608 174.1-48.125.666-93.326-17.479-127.401-51.087-33.708-33.246-52.272-77.526-52.272-124.685 0-59.98 30.361-115.236 81.216-147.809 51.27-32.838 79.187-66.186 93.348-111.507l2.581-8.26 2.58 8.257c9.333 29.869 25.53 55.364 49.516 77.939 4.02 3.786 10.35 3.593 14.136-.428 3.785-4.021 3.594-10.351-.429-14.136-21.713-20.438-35.736-42.471-44.133-69.341l-12.125-38.802c-1.305-4.175-5.171-7.018-9.545-7.018s-8.24 2.843-9.545 7.018l-12.126 38.807c-12.639 40.45-38.072 70.545-85.045 100.63-56.624 36.268-90.429 97.819-90.429 164.65 0 52.553 20.679 101.891 58.228 138.924 37.248 36.736 86.47 56.867 138.888 56.865.941 0 1.891-.006 2.833-.02 51.527-.712 100.087-21.236 136.733-57.792 36.664-36.573 57.12-84.914 57.6-136.118.432-46.301-15.704-91.371-45.436-126.909z" />
                          <path
                            d="m279.576 280.012v-29.712c0-5.523-4.478-10-10-10h-46.783c-5.522 0-10 4.477-10 10v29.712h-29.711c-5.522 0-10 4.477-10 10v46.783c0 5.523 4.478 10 10 10h29.711v29.711c0 5.523 4.478 10 10 10h46.783c5.522 0 10-4.477 10-10v-29.711h29.712c5.522 0 10-4.477 10-10v-46.783c0-5.523-4.478-10-10-10zm19.712 46.783h-29.712c-5.522 0-10 4.477-10 10v29.711h-26.783v-29.711c0-5.523-4.478-10-10-10h-29.711v-26.783h29.711c5.522 0 10-4.477 10-10v-29.712h26.783v29.712c0 5.523 4.478 10 10 10h29.712z" />
                          <path
                            d="m369.497 246.666c51.239-.708 92.983-42.352 93.459-93.223.313-33.486-16.989-62.983-43.266-79.911-21.598-13.914-37.772-29.46-45.4-53.873l-6.143-19.659-6.143 19.661c-7.603 24.331-23.627 39.927-45.19 53.738-26.16 16.756-43.48 45.945-43.48 79.151 0 52.43 43.18 94.848 96.163 94.116z"
                            fill="#ffbdbc" />
                        </svg>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="ttr-title">Best Professionals</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                  <div className="feature-container feature-bx1 feature4">
                    <div className="icon-md">
                      <span className="icon-cell">
                        <svg enable-background="new 0 0 512 512" height="85" viewBox="0 0 512 512" width="85"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="m181.049 229.112-76.87 76.971c-14.045 14.07-14.045 36.883 0 50.953l50.881 50.974c14.045 14.07 36.815 14.07 50.86 0l178.611-178.899h-203.482z"
                            fill="#e2c4ff" />
                          <path
                            d="m495.277 81.339c-10.57-10.578-24.625-16.403-39.574-16.403-3.325 0-6.605.288-9.813.853 3.065-17.397-2.103-35.975-15.505-49.387-10.57-10.577-24.624-16.402-39.574-16.402s-29.003 5.825-39.573 16.402c-21.816 21.83-21.816 57.352 0 79.182 2.71 2.712 5.648 5.111 8.772 7.18l-18.689 18.716-52.105-52.184c-3.902-3.907-10.233-3.912-14.142-.012-3.908 3.902-3.914 10.234-.011 14.143l18.64 18.67-196.602 196.922c-17.56 17.593-17.902 46.002-1.029 64.017l-16.422 16.452c-3.896 3.903-3.896 10.226 0 14.129l12.383 12.406-88.75 88.913c-3.901 3.909-3.896 10.24.013 14.142 1.953 1.948 4.509 2.922 7.065 2.922 2.562 0 5.125-.979 7.078-2.936l88.724-88.887 12.357 12.38c1.876 1.88 4.422 2.936 7.078 2.936s5.202-1.056 7.078-2.936l16.396-16.426c8.547 8.028 19.644 12.432 31.418 12.432 12.28 0 23.825-4.79 32.506-13.487l196.588-196.91 18.617 18.648c1.953 1.956 4.515 2.935 7.077 2.935 2.557 0 5.113-.975 7.065-2.923 3.908-3.902 3.914-10.234.011-14.143l-52.155-52.24 18.732-18.758c2.054 3.126 4.453 6.09 7.198 8.836 10.57 10.577 24.624 16.402 39.573 16.402s29.003-5.825 39.574-16.402c21.817-21.831 21.817-57.352.001-79.182zm-129.892-50.8c6.792-6.796 15.822-10.539 25.426-10.539s18.635 3.743 25.427 10.539c13.407 13.416 13.997 34.875 1.773 49.001-.638.583-1.266 1.183-1.881 1.799-.616.617-1.214 1.245-1.795 1.882-6.533 5.671-14.791 8.766-23.524 8.766-9.604 0-18.634-3.743-25.427-10.54-14.025-14.035-14.025-36.873.001-50.908zm-239.787 380.799-24.74-24.786 9.327-9.344 14.287 14.313 10.454 10.473zm73.244-10.392c-4.903 4.912-11.42 7.617-18.352 7.617s-13.449-2.705-18.353-7.617l-50.881-50.975c-10.134-10.152-10.134-26.672-.001-36.823l196.578-196.898 87.616 87.767zm177.227-244.657-20.619-20.654 24.634-24.669c3.498.676 7.086 1.021 10.727 1.021 3.325 0 6.606-.288 9.813-.853-1.189 6.75-1.139 13.678.151 20.413zm105.062-9.905c-6.792 6.796-15.823 10.539-25.427 10.539s-18.635-3.743-25.427-10.539c-13.407-13.416-13.998-34.875-1.773-49.001.638-.583 1.266-1.183 1.881-1.799.617-.617 1.215-1.246 1.797-1.884 6.532-5.67 14.789-8.764 23.521-8.764 9.604 0 18.635 3.743 25.427 10.54 14.026 14.035 14.026 36.873.001 50.908z"
                            fill="#020288" />
                        </svg>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="ttr-title">Medical Treatment</h4>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/contactUs" className="btn btn-primary shadow">Contact US</Link>
            </div>
          </div>
        </div>
        <img className="pt-img1 animate-wave" src={waveOrange} alt=""/>
        <img className="pt-img2 animate2" src={circleSmallBlue} alt=""/>
        <img className="pt-img3 animate-rotate" src={linecircleSmall} alt=""/>
        <img className="pt-img4 animate-wave" src={squareDot} alt=""/>
        <img className="pt-img5 animate2" src={squareblue} alt=""/>
      </section>

    {/* <!-- About us --> */}
    <section className="section-sp1 service-wraper2">
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-sm-6 mb-30">
                    <div className="feature-container feature-bx3">
                        <h2 className="counter text-secondary">120</h2>
                        <h5 className="ttr-title">Years With You</h5>
                        <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-30">
                    <div className="feature-container feature-bx3">
                        <h2 className="counter text-secondary">400</h2>
                        <h5 className="ttr-title">Awards</h5>
                        <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-30">
                    <div className="feature-container feature-bx3">
                        <h2 className="counter text-secondary">250</h2>
                        <h5 className="ttr-title">Doctors</h5>
                        <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-30">
                    <div className="feature-container feature-bx3">
                        <h2 className="counter text-secondary">800</h2>
                        <h5 className="ttr-title">Satisfied Client</h5>
                        <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/* <!-- Team --> */}
    <section className="section-area section-sp3 team-wraper">
        <div className="container">
            <div className="heading-bx text-center">
                <h6 className="title-ext text-secondary">Our Doctor</h6>
                <h2 className="title">Meet Best Doctors</h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6 mb-30">
                    <div className="team-member">
                        <div className="team-media">
                            <img src={dr3} alt=""/>
                        </div>
                        <div className="team-info">
                            <div className="team-info-comntent">
                                <h4 className="title">Dr. Gaurav Gupta</h4>
                                <span className="text-secondary">Dentist</span>
                            </div>
                            <ul className="social-media">
                                <li><Link target="blank" to="https://twitter.com/"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link target="blank" to="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></Link></li>
                                <li><Link target="blank" to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-30">
                    <div className="team-member active">
                        <div className="team-media">
                            <img src={dctr5} alt=""/>
                        </div>
                        <div className="team-info">
                            <div className="team-info-comntent">
                                <h4 className="title">Dr.Sunita More</h4>
                                <span className="text-secondary">Chiropractor</span>
                            </div>
                            <ul className="social-media">
                                <li><Link target="blank" to="https://twitter.com/"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link target="blank" to="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></Link></li>
                                <li><Link target="blank" to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-30">
                    <div className="team-member">
                        <div className="team-media">
                            <img src={dctr1} alt=""/>
                        </div>
                        <div className="team-info">
                            <div className="team-info-comntent">
                                <h4 className="title">Dr.Shekhar Kulkarni</h4>
                                <span className="text-secondary">Cardiologist</span>
                            </div>
                            <ul className="social-media">
                                <li><Link target="blank" to="https://twitter.com/"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link target="blank" to="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></Link></li>
                                <li><Link target="blank" to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="pt-img1 animate1" src={trangleOrange} alt=""/>
        <img className="pt-img2 animate2" src={squareDot} alt=""/>
        <img className="pt-img3 animate-rotate" src={linecircleSmall} alt=""/>
        <img className="pt-img4 animate-wave" src={waveBlue} alt=""/>
        <img className="pt-img5 animate-wave" src={circledots} alt=""/>
    </section>

     {/* <!-- Testimonial --> */}
     <section className="section-area section-sp3 testimonial-wraper">
        <div className="container">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">Testimonial</h6>
            <h2 className="title m-b0">See What Are The Patients <br/>Saying About us</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <div className="thumb-wraper mb-2">
                <img className="bg-img" src={shape} alt=""/>
                <ul>
                  <li data-member="1"><Link to="javascript"><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD66NG75Tzfe5Tpbi2knvezbgVaUZQpdgHZw&usqp=CAU"
                        alt="" /></Link></li>
                  <li data-member="2"><Link to="javascript"><img
                        src="https://vasundharahospital.com/wp-content/uploads/2020/07/Vasundhara-Hospital-Training.png"
                        alt="" /></Link></li>
                  <li data-member="3"><Link to="javascript"><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZNduHSoCMpr-DxkCBhgcUO3A6sCyur9oJABlk7eXT1UgsK2_or9M2jha7aDwr5KU7QiA&usqp=CAU"
                        alt="" /></Link></li>
                  <li data-member="4"><Link to="javascript"><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD66NG75Tzfe5Tpbi2knvezbgVaUZQpdgHZw&usqp=CAU"
                        alt="" /></Link></li>
                  <li data-member="5"><Link to="javascript"><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZNduHSoCMpr-DxkCBhgcUO3A6sCyur9oJABlk7eXT1UgsK2_or9M2jha7aDwr5KU7QiA&usqp=CAU"
                        alt="" /></Link></li>
                  <li data-member="6"><Link to="javascript"><img
                        src="https://vasundharahospital.com/wp-content/uploads/2020/07/Vasundhara-Hospital-Training.png"
                        alt="" /></Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="swiper-container testimonial-slide">
                <div className="swiper-wrapper">
                  <div className="swiper-slide" data-rel="1">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>A BIG thanks to all Raj Hospital staff, doctors and helpers. Big relief to take a healthy baby back home. All staff nurses are helpful, giving food to the baby on time and correct updates provided. Thanks to all doctors for providing correct counseling and medication to pre-term baby. Sisters here also taught me syringe feeding properly and burping techniques as well. I would definitely recommend Surya Neonatal for baby care to friends and family. Thanks a lot.

                          </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">A Mother.</h5>
                        <p>patient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  {/* <div className="swiper-slide" data-rel="2">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                          maecena ssuspendisse ultrices gravida.</p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" data-rel="3">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                          maecena ssuspendisse ultrices gravida.</p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" data-rel="4">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                          maecena ssuspendisse ultrices gravida.</p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" data-rel="5">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                          maecena ssuspendisse ultrices gravida.</p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" data-rel="6">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                          maecena ssuspendisse ultrices gravida.</p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="swiper-button-prev test-btn-prev"><i className="las la-arrow-left"></i></div>
                <div className="swiper-button-next test-btn-next"><i className="las la-arrow-right"></i></div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
        <img className="pt-img1 animate1" src={plusOrange} alt=""/>
        <img className="pt-img2 animate2" src={squareblue} alt=""/>
        <img className="pt-img3 animate3" src={circledots} alt=""/>
        <img className="pt-img4 animate4" src={circleOrange2} alt=""/>
      </section>
</div>
    </>
  )
}

export default About
