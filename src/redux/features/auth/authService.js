import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const API_URL = `${BACKEND_URL}/api/users/`;

// Validate email
export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

//register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);
  return response.data;
};
//book user
const bookUser = async (userData) => {
  const response = await axios.post(API_URL + "bookUser", userData);
  return response.data;
};
//contact user
const contactUser = async (userData) => {
  const response = await axios.post(API_URL + "contactUser", userData);
  return response.data;
};

//login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  return response.data;
};

//logout user
const logout = async () => {
  const response = await axios.get(API_URL + "logout");
  return response.data.message;
};

//Get user
const getUser = async () => {
  const response = await axios.get(API_URL + "getuser");
  return response.data;
};

//getusers
const getusers = async () => {
  const response = await axios.get(API_URL + "getusers");
  return response.data;
};

//getContact
const getContact = async () => {
  const response = await axios.get(API_URL + "getContact");
  return response.data;
};

//delete users
const deleteUsers = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data.message;
};

//delete contacts
const deleteContacts = async (id) => {
  const response = await axios.delete(API_URL + `delete/${id}`);
  return response.data.message;
};



const authService = {
  register,
  login,
  logout,
  getUser,
  getusers,
  deleteUsers,
  deleteContacts,
  bookUser,
  contactUser,
  getContact,
};

export default authService;
