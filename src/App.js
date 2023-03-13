import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter} from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Faq from "./Pages/Faq";
import Booking from "./Pages/Booking";
import Login from "./Pages/Login";
import Service from "./Pages/Service";
import ServiceDetails from "./Pages/ServiceDetails";
import Blog from "./Pages/Blog";
import axios from "axios";
import BlogDetails from "./Pages/BlogDetails";
import LatestNews from "./Pages/LatestNews";
import Gallary from "./Pages/Gallary";
import ContactUs from "./Pages/ContactUs";
import Layout from "./Components/Layout";
import Register from "./Pages/Register";
import { useDispatch, useSelector } from "react-redux";
import {  getUser, selectIsLoggedIn, selectUser } from "./redux/features/auth/authSlice";
import { useEffect } from "react";
import UserList from "./Pages/UserList";
import ContactList from "./Pages/ContactList";

axios.defaults.withCredentials = true;


function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (isLoggedIn && user === null) {
      dispatch(getUser());
    }
  }, [dispatch, isLoggedIn, user]);
  return (
    <BrowserRouter>
      <ToastContainer  style={{marginTop:'100px'}}/>

      <Routes>
        <Route exact path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/team" element={<Layout><Team /></Layout>} />
        <Route path="/faq" element={<Layout><Faq /></Layout>} />
        <Route path="/contactUs" element={<Layout><ContactUs /></Layout>} />
        <Route path="/gallary" element={<Layout><Gallary /></Layout>} />
        <Route path="/latestNews" element={<Layout><LatestNews /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/blogDetails" element={<Layout><BlogDetails /></Layout>} />
        <Route path="/service" element={<Layout><Service /></Layout>} />
        <Route path="/serviceDetails" element={<Layout><ServiceDetails /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Layout><Booking /></Layout>} />
        <Route path="/userList" element={<Layout><UserList /></Layout>} />
        <Route path="/contactUsers" element={<Layout><ContactList /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
