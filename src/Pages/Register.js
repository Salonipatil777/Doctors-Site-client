import React, { useEffect, useState } from "react";
import logo from "../images/Raj-hospital.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RESET, register } from "../redux/features/auth/authSlice";

const initialState = {
    name: "",
    email: "",
    password: "",
  };
const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggledIn, isSuccess } = useSelector((state) => state.auth);

  const registerUser = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return toast.error("All fields are required");
    }
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    const userData = {
      name,
      email,
      password,
    };
    // console.log(userData);
    await dispatch(register(userData));
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
      {/* <!-- Login --> */}
      <div className="section-area account-wraper2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="appointment-form form-wraper">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>

                <form onSubmit={registerUser}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      className="form-control"
                      placeholder="Name"
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      className="form-control"
                      placeholder="Email"
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      className="form-control"
                      placeholder="Password"
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="form-group">
                  <button
                      type="submit"
                      className="btn mb-30 btn-lg btn-primary w-100"
                    >
                      register
                    </button>
                  </div>
                  <div className="text-center mt-40">
                    <p className="mt-0">Already have an account?</p>
                    <Link
                      className="btn btn-lg btn-secondary w-100"
                      data-toggle="tab"
                      to="/login"
                    >
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
