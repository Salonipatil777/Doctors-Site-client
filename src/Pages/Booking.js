import React, { useEffect, useState } from "react";
import img1 from "../images/banner/img1.jpg";
import plusblue from "../images/shap/plus-blue.png";
import waveBlue from "../images/shap/wave-blue.png";
import circledots from "../images/shap/circle-dots.png";
import { Link, useNavigate } from "react-router-dom";
import { RESET, bookUser } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  name: "",
  phone: "",
  department: "",
  doctor: "",
  date: "",
  time: "",
};

const Booking = () => {
  // const value = new Date();
  // const interval = 60;
  // const customFormat = "HH:mm";
  const [formData, setFormData] = useState(initialState);
  const { name, phone, department, time, doctor, date } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggledIn, isSuccess } = useSelector((state) => state.auth);

  const appointUser = async (e) => {
    e.preventDefault();
    if (!name || !phone || !department || !doctor || !date || !time) {
      return toast.error("All fields are required");
    }

    const userData = {
      name,
      phone,
      department,
      doctor,
      date,
      time,
    };
    // console.log(userData);
    await dispatch(bookUser(userData));
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
            className="page-banner"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>Booking</h1>
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
                      Booking
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

        {/* <!-- Appointment -->/ */}
        <section className="section-area section-sp2 appointment-wraper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="appointment-form form-wraper">
                  <h3 className="title">Book Appointment</h3>
                  <form onSubmit={appointUser}>
                    <div className="form-group">
                      <select
                        name="department"
                        className="form-select"
                        value={department}
                        onChange={handleInputs}
                      >
                        <option selected>Selecty Department</option>
                        <option value="Outpatient department">
                          Outpatient department
                        </option>
                        <option value="Inpatient Service(IP)">
                          Inpatient Service(IP)
                        </option>
                        <option value=" Medical Department">
                          {" "}
                          Medical Department
                        </option>
                        <option value=" Medical Department">
                          {" "}
                          Nursing Department
                        </option>
                        <option value="Operation Theatre">
                          Operation Theatre
                        </option>
                        <option value="Radiology Department">
                          Radiology Department
                        </option>
                        <option value="Physical Medicine">
                          Physical Medicine
                        </option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select
                        name="doctor"
                        className="form-select"
                        value={doctor}
                        onChange={handleInputs}
                      >
                        <option selected>Select Doctor</option>
                        <option value="Dr. Aggarwal Supriya">
                          Dr. Aggarwal Supriya
                        </option>
                        <option value="Dr. Agnihotri Kumar">
                          Dr. Agnihotri Kumar
                        </option>
                        <option value="Dr. Agrawal Kumar ">
                          Dr. Agrawal Kumar{" "}
                        </option>
                        <option value="Dr. Sanjay Sachdeva.">
                          Dr. Sanjay Sachdeva.
                        </option>
                        <option value="Dr. Aditya Gupta.">
                          Dr. Aditya Gupta.
                        </option>
                        <option value="Dr. Siddhartha Patil">
                          Dr. Siddhartha patil
                        </option>
                        <option value="Dr. Agrawal Ashu">
                          Dr. Agrawal Ashu{" "}
                        </option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        name="name"
                        type="text"
                        value={name}
                        onChange={handleInputs}
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="phone"
                        type="number"
                        value={phone}
                        onChange={handleInputs}
                        className="form-control"
                        placeholder="Phone Numbers"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="date"
                        type="date"
                        className="form-control"
                        value={date}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="form-group">
                      <div class="cs-form">
                        <input
                        name="time"
                          type="time"
                          class="form-control"
                          value={time}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-secondary btn-lg">
                      Appointment Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Booking;
