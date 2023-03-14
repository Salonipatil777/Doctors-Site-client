import React from "react";
import img1 from "../images/banner/img1.jpg";
import plusblue from "../images/shap/plus-blue.png";
import waveBlue from "../images/shap/wave-blue.png";
import circledots from "../images/shap/circle-dots.png";
import check from "../images/services/check.png";
import pdf from "../images/icon/pdf.png";
import doc from "../images/icon/doc.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ServiceDetails = () => {
  return (
    <>
      <div className="page-content bg-white">
      <Helmet>
          <title>Explore Services</title>
          <meta
            name="description"
            content="Diagnostics,Treatments,Surgery,Emergency,etc.
"
          />
        </Helmet>
        {/* <!-- Inner Banner --> */}
        <div className="banner-wraper">
          <div
            className="page-banner"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>Service Details</h1>
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
                        </svg>{" "}
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Service Details
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

        {/* <!-- About us --> */}
        <section className="section-area section-sp1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-30">
                <div className="ttr-media mb-30">
                  <img src={check} className="rounded" alt="" />
                </div>
                <div className="clearfix">
                  <div className="head-text mb-30">
                    <h2 className="title mb-15">
                      Why Medical Had Been So Popular Till
                    </h2>
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-6 mb-30">
                      <ul className="list-check-squer mb-0">
                        <li>Then along come two they</li>
                        <li>That’s just a little bit more than</li>
                        <li>Standard dummy text ever since</li>
                        <li>Simply dummy text of the printing</li>
                        <li>Make a type specimen book</li>
                      </ul>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="skillbar-box mb-30">
                        <h6 className="title">Advanced Technology</h6>
                        <div className="skillbar appear" data-percent="96%">
                          <p className="skillbar-bar"></p>
                          <span className="skill-bar-percent">96%</span>
                        </div>
                      </div>
                      <div className="skillbar-box mb-30">
                        <h6 className="title">Certified Engineers</h6>
                        <div className="skillbar appear" data-percent="79%">
                          <p className="skillbar-bar"></p>
                          <span className="skill-bar-percent">79%</span>
                        </div>
                      </div>
                      <div className="skillbar-box mb-0">
                        <h6 className="title">6 years Experience</h6>
                        <div className="skillbar appear" data-percent="75%">
                          <p className="skillbar-bar"></p>
                          <span className="skill-bar-percent">75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix">
                  <div className="head-text mb-30">
                    <h4 className="title mb-10">Popular Questions</h4>
                    <p className="mb-0">
                      Standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                  </div>
                  <div className="accordion ttr-accordion1" id="accordionRow1">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading1">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="true"
                          aria-controls="collapse1"
                        >
                          How Doctor Can Ease Your Pain?
                        </button>
                      </h2>
                      <div
                        id="collapse1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="heading1"
                        data-bs-parent="#accordionRow1"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            pain medicines. physical therapies (such as heat or
                            cold packs, massage, hydrotherapy and exercise)
                            psychological therapies (such as cognitive
                            behavioural therapy, relaxation techniques and
                            meditation) mind and body techniques (such as
                            acupuncture)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                          How do I withdraw from a subject?
                        </button>
                      </h2>
                      <div
                        id="collapse2"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading2"
                        data-bs-parent="#accordionRow1"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            A participant can leave a research study at any
                            time. When withdrawing from the study, the
                            participant should let the research team know that
                            he/she/they wishes to withdraw.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading3">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                        >
                          Understand Doctor Before You Regret?
                        </button>
                      </h2>
                      <div
                        id="collapse3"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading3"
                        data-bs-parent="#accordionRow1"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            In a survey of 3,571 resident physicians, career
                            choice regret was reported by 502 or 14.1% of the
                            respondents, according to a study published on
                            Tuesday in JAMA. However, there were wide ranges of
                            prevalence by clinical specialty.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading4">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                        >
                          What types of systems do you support?
                        </button>
                      </h2>
                      <div
                        id="collapse4"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading4"
                        data-bs-parent="#accordionRow1"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            Support services are the functions within the
                            hospital which carry out much of the ground work.
                            They support the work carried out by the doctors and
                            nurses and their roles are crucial too in the
                            working of a large health care institution.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading5">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                        >
                          We Teach You How To Feel Better?
                        </button>
                      </h2>
                      <div
                        id="collapse5"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading5"
                        data-bs-parent="#accordionRow1"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            {" "}
                            I really appreciate all the doctors and nursing
                            staff for their commitment. I am very thankful to
                            this hospital and Dr P.C.Reddy for curing my
                            father's health problem with his skillful treatment.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading6">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse6"
                          aria-expanded="false"
                          aria-controls="collapse6"
                        >
                          How Can I Contact You?
                        </button>
                      </h2>
                      <div
                        id="collapse6"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading6"
                        data-bs-parent="#accordionRow1"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            If you and your family agree that you're ready to go
                            home this afternoon, for instance, have your point
                            person tell the nurse. That way, they know to move
                            up any tests to today, rather than scheduling them
                            for tomorrow. “After you ask, often the answer is
                            'I'd be happy to let you go home,” he adds.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <aside className="sticky-top pb-1">
                  <div className="widget">
                    <ul className="accordion">
                      <li>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading1">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              VISION
                            </button>
                          </h2>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionRow1"
                          >
                            <div className="accordion-body">
                              <p className="mb-0">
                                To be the “centre-of-excellence” in providing
                                quality health care for women and children in
                                the country.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading2">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse2"
                              aria-expanded="false"
                              aria-controls="collapse2"
                            >
                              MISSION
                            </button>
                          </h2>
                          <div
                            id="collapse2"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading2"
                            data-bs-parent="#accordionRow1"
                          >
                            <div className="accordion-body">
                              <p className="mb-0">
                                <ul>
                                  <li>
                                    1. To provide “excellence” in quality care
                                    through highest standards of expertise and
                                    passion.
                                  </li>
                                  <li>
                                    2. To demonstrate “Care and Warmth” so that
                                    patients are comfortable sharing, expressing
                                    and seeking support.
                                  </li>
                                  <li>
                                    3. To build “trust” by demonstrating genuine
                                    care for well-being, clear and transparent
                                    communication and swift responsiveness.
                                  </li>
                                </ul>
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading3">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse3"
                              aria-expanded="false"
                              aria-controls="collapse3"
                            >
                              QUALITY POLICY
                            </button>
                          </h2>
                          <div
                            id="collapse3"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading3"
                            data-bs-parent="#accordionRow1"
                          >
                            <div className="accordion-body">
                              <p className="mb-0">
                                Raj Hospitals provide comprehensive healthcare
                                services for women and children practicing the
                                highest levels of skills, professionalism and
                                ethical practices. Surya Hospitals facilitates
                                medical education & research and thus remains
                                committed towards continuous quality
                                improvement.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading4">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse4"
                              aria-expanded="false"
                              aria-controls="collapse4"
                            >
                              QUALITY OBJECTIVES
                            </button>
                          </h2>
                          <div
                            id="collapse4"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading4"
                            data-bs-parent="#accordionRow1"
                          >
                            <div className="accordion-body">
                              <p className="mb-0">
                                <ul>
                                  <li>
                                    1. Demonstrate Patient Centric Approach and
                                    action in everything we do.
                                  </li>
                                  <li>
                                    2. Ensure Safety of Patients, Employees and
                                    other Service Providers.
                                  </li>
                                  <li>
                                    3. Monitor Access and Improve Performance to
                                    achieve Service Excellence and Patient
                                    Delight.
                                  </li>
                                  <li>
                                    4. Ensure Compliance to all Statutory,
                                    Legal, Safety and Environmental
                                    Requirements.
                                  </li>
                                </ul>
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="widget">
                    <div className="brochure-bx">
                      <h5 className="title-head">Download</h5>
                      <Link to="javascript" className="download-link">
                        <img src={pdf} alt="" />
                        <h5 className="title">Download our Brochures</h5>
                        <span>Download</span>
                      </Link>
                      <Link to="javascript" className="download-link">
                        <img src={doc} alt="" />
                        <h5 className="title">Our Company Details</h5>
                        <span>Download</span>
                      </Link>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetails;
