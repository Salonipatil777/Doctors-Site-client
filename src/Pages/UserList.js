import React, { useEffect, useState } from "react";
import "./UserList.scss";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
// import Search from "../Components/search/Search";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, getusers } from "../redux/features/auth/authSlice";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { FILTER_USERS, selectUsers } from "../redux/features/auth/filterSlice";
import ReactPaginate from "react-paginate";
import plusblue from "../images/shap/plus-blue.png";
import waveBlue from "../images/shap/wave-blue.png";
import circledots from "../images/shap/circle-dots.png";
import img1 from "../images/banner/img1.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";



const UserList = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { users } = useSelector((state) => state.auth);
  const filteredUsers = useSelector(selectUsers);

  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);

  const removeUser = async (id) => {
    await dispatch(deleteUsers(id));
    await dispatch(getusers());
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete this user",
      message: "Are you sure to do delete this user?.",
      buttons: [
        {
          label: "Delete",
          onClick: () => removeUser(id),
        },
        {
          label: "Cancel",
        },
      ],
    });
  };

  useEffect(() => {
    dispatch(FILTER_USERS({ users, search }));
  }, [dispatch, users, search]);

  
    const itemsPerPage = 5;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = filteredUsers.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % filteredUsers.length;
      setItemOffset(newOffset);
    };

    return (
      <section>
        <div className="banner-wraper">
        <Helmet>
          <title>Get Appointments</title>
          <meta
            name="description"
            content="Admin Only.
"
          />
        </Helmet>
          <div
            className="page-banner"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>Appointments</h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/userList">Appointment</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <Link to="/contactUsers">Contacts</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
            <img className="pt-img2 animate2" src={circledots} alt="" />
            <img className="pt-img3 animate-rotate" src={plusblue} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="user-list">
            <div className="table">
              <div className="--flex-between">
                <span>
                  <h3>All appointments</h3>
                </span>
                {/* <span>
                  <Search
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </span> */}
              </div>
  
              {users.length === 0 ? (
                <p>No user found...</p>
              ) : (
                <MDBTable align="middle">
                  <MDBTableHead>
                    <tr>
                      <th scope="col">s/n</th>
                      <th scope="col">Name</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Department</th>
                      <th scope="col">Doctor</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                    </tr>
                  </MDBTableHead>
  
                  <MDBTableBody>
                    {currentItems.map((user, index) => {
                      const { _id, name, phone, department, doctor, date,time } = user;
                      return (
                        <tr key={_id}>
                          <div className="d-flex align-items-center">
                            <div className="ms-3">
                              <p className="fw-bold mb-1">{index + 1}</p>
                            </div>
                          </div>
                          <td>
                            <p className="fw-normal mb-1">{name}</p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">{phone}</p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">{department}</p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">{doctor}</p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">{date}</p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">{time}</p>
                          </td>
                          <td>{/* <ChangeRole _id={_id} email={email} /> */}</td>
                          <td>
                            <span>
                              <FaTrashAlt
                                size={20}
                                color="red"
                                onClick={() => confirmDelete(_id)}
                              />
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </MDBTableBody>
                </MDBTable>
              )}
              <hr />
            </div>
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="Prev"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              previousLinkClassName="page-num"
              nextLinkClassName="page-num"
              activeLinkClassName="activePage"
            />
          </div>
        </div>
      </section>
    );
  };



export default UserList;
