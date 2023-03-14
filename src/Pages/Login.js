import React, { useEffect, useState } from "react";
import logo from "../images/Raj-hospital.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RESET, login } from "../redux/features/auth/authSlice";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Helmet } from "react-helmet";

const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, isSuccess } = useSelector((state) => state.auth);

  const loginUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    const userData = {
      email,
      password,
    };

    // console.log(userData);
    await dispatch(login(userData));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/userList");
    }
    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, navigate]);

  return (
    <>
      {/* <div id="loading-icon-bx">
		<div className="loading-inner">
			<div className="load-one"></div>
			<div className="load-two"></div>
			<div className="load-three"></div>
		</div>
	</div> */}

      {/* <!-- Login --> */}
      <div className="section-area account-wraper2">
        <Helmet>
          <title>Login</title>
          <meta
            name="description"
            content="Login to see contacts and appoinments.
"
          />
        </Helmet>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="appointment-form form-wraper">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
                <form onSubmit={loginUser}>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      required
                      className="form-control"
                      placeholder="Email"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="password"
                      value={password}
                      required
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Password"
                      onChange={handleInputChange}
                      style={{ position: "relative" }}
                    />
                    <span
                      className="icon"
                      onClick={togglePassword}
                      style={{
                        position: "absolute",
                        top: "14px",
                        right: "20px",
                      }}
                    >
                      {showPassword ? (
                        <AiOutlineEye size={20} />
                      ) : (
                        <AiOutlineEyeInvisible size={20} />
                      )}
                    </span>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn mb-30 btn-lg btn-primary w-100"
                    >
                      login
                    </button>
                    {/* <Link to="#formForget" data-toggle="tab">
                      Forgot Password
                    </Link> */}
                  </div>
                  {/* <div className="text-center mt-40">
                    <p className="mt-0">Dont have any account?</p>
                    <Link
                      className="btn btn-lg btn-secondary w-100"
                      data-toggle="tab"
                      to="/register"
                    >
                      Register
                    </Link>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
