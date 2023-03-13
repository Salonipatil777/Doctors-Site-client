import React, { useEffect, useState } from "react";
import img1 from "../images/banner/img1.jpg";
import plusblue from "../images/shap/plus-blue.png";
import waveBlue from "../images/shap/wave-blue.png";
import circledots from "../images/shap/circle-dots.png";
import about from "../images/about/pic-1.jpg";
import icon1 from "../images/icon/icon1.png";
import icon2 from "../images/icon/icon2.png";
import icon3 from "../images/icon/icon3.png";
import { Link, useNavigate } from "react-router-dom";
import { RESET, contactUser } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  name: "",
  phone: "",
  department: "",
  doctor: "",
  message: "",
};

const ContactUs = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, phone, department, doctor, message } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggledIn, isSuccess } = useSelector((state) => state.auth);

  const contactUs = async (e) => {
    e.preventDefault();
    if (!name || !phone || !department || !doctor || !message) {
      return toast.error("All fields are required");
    }

    const userData = {
      name,
      phone,
      department,
      doctor,
      message,
    };
    // console.log(userData);
    await dispatch(contactUser(userData));
  };

  useEffect(() => {
    if (isSuccess && isLoggledIn) {
      navigate("/");
    }
    dispatch(RESET());
  }, [isLoggledIn, isSuccess, dispatch, navigate]);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="page-content bg-white">
        {/* <!-- Inner Banner --> */}
        <div className="banner-wraper">
          <div
            className="page-banner banner-lg contact-banner"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>Contact Us</h1>
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
                      Contact Us
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
        <section className="">
          <div className="container">
            <div className="contact-wraper">
              <div className="row">
                <div className="col-lg-6 mb-30">
                  <form
                    onSubmit={contactUs}
                    className="form-wraper contact-form ajax-form"
                    action="https://meditro.themetrades.com/html/demo/script/contact.php"
                  >
                    <div className="ajax-message"></div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          name="name"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Your Name"
                          value={name}
                          onChange={handleInputs}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          name="phone"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Phone Number"
                          value={phone}
                          onChange={handleInputs}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          name="doctor"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Doctor Name"
                          value={doctor}
                          onChange={handleInputs}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <select
                          className="form-select"
                          name="department"
                          value={department}
                          onChange={handleInputs}
                        >
                          <option selected>Selecty Department</option>
                        <option value="Outpatient department (OPD)">Outpatient department (OPD)</option>
                        <option value="Inpatient Service (IP)">Inpatient Service (IP)</option>
                        <option value=" Medical Department"> Medical Department</option>
                        <option value=" Medical Department"> Nursing Department</option>
                        <option value="Operation Theatre Complex (OT)">
                          Operation Theatre Complex (OT)
                        </option>
                        <option value="Radiology Department (X-ray)">Radiology Department (X-ray)</option>
                        <option value="Physical Medicine and Rehabilitation Department">
                          Physical Medicine and Rehabilitation Department
                        </option>
                        </select>
                      </div>
                      <div className="form-group col-md-12">
                        <textarea
                          name="message"
                          required
                          className="form-control"
                          placeholder="Type Message"
                          value={message}
                          onChange={handleInputs}
                        ></textarea>
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          className="btn w-100 btn-secondary btn-lg"
                        >
                          Contact Us
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-6 mb-30">
                  <div
                    className="contact-info ovpr-dark"
                    style={{ backgroundImage: `url(${about})` }}
                  >
                    <div className="info-inner">
                      <h4 className="title mb-30">
                        Contact Us For Any Informations
                      </h4>
                      <div className="icon-box">
                        <h6 className="title">
                          <i className="ti-map-alt"></i>Location
                        </h6>
                        <p>
                          Royal Prestige, 2nd Floor, Lohia Ln, Shahupuri,
                          Kolhapur, Maharashtra 416001
                        </p>
                      </div>
                      <div className="icon-box">
                        <h6 className="title">
                          <i className="ti-id-badge"></i>Email &amp; Phone
                        </h6>
                        <Link to="javascript;" className="text-white">
                          info@rajhospitals.in
                        </Link>
                        <p>+91 9112666699 / 7035235235</p>
                      </div>
                      <div className="icon-box">
                        <h6 className="title">
                          <i className="ti-world"></i>Follow Us
                        </h6>
                        <ul className="social-media">
                          <li style={{ marginRight: "2%" }}>
                            <Link target="blank" to="https://twitter.com/">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                          <li style={{ marginRight: "2%" }}>
                            <Link target="blank" to="https://www.linkedin.com/">
                              <i className="fab fa-linkedin"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              target="blank"
                              to="https://www.instagram.com/"
                            >
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- About us --> */}
        <section className="section-area section-sp1">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="feature-container feature-bx4 feature4">
                  <div className="icon-md feature-icon">
                    <img src={icon1} alt="" />
                  </div>
                  <div className="icon-content">
                    <h5 className="ttr-title">Contact Number</h5>
                    <p>+91 9112666699</p>
                    <p>+91 7035235235</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="feature-container feature-bx4 feature3">
                  <div className="icon-md feature-icon">
                    <img src={icon3} alt="" />
                  </div>
                  <div className="icon-content">
                    <h5 className="ttr-title">Email Address</h5>
                    <p>info@rajhospitals.in</p>
                    <p>info@rajhospitals.in</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="feature-container feature-bx4 feature2">
                  <div className="icon-md feature-icon">
                    <img src={icon2} alt="" />
                  </div>
                  <div className="icon-content">
                    <h5 className="ttr-title">Address</h5>
                    <p>
                      Royal Prestige,Lohia Ln, Shahupuri, Kolhapur, Maharashtra
                      416001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <h1 style={{textAlign:'center'}}>Locate Us</h1>
        <iframe style={{width:'100%',height:'400px'}} id="gmap_canvas" src="https://maps.google.com/maps?q=Kolhapur&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
    </>
  );
};

export default ContactUs;
