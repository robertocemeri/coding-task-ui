import React, { useEffect } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <div className="col-lg-3" id="sidear-wrapper">
        <nav
          id="sidebarMenu"
          className={`sidebar ${!showSidebar ? "d-none" : ""} d-lg-block`}
        >
          <Link
            onClick={closeSidebar}
            className="navbar-brand mt-2 mt-lg-0"
            to="/"
          >
            <div className="d-flex justify-content-center header-logo">
              Coding Task
              {/* <img src="" alt="App Logo" /> */}
            </div>
          </Link>
          <div onClick={closeSidebar} className="hide d-lg-none">
            &lsaquo;
          </div>
          <div className="mt-md-4 mt-2">
            <ul>
              <li>
                <Link
                  onClick={closeSidebar}
                  to="/home"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <span className="item">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeSidebar}
                  to="/products"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <span className="item">My Listed Products</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeSidebar}
                  to="/product/new"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <span className="item">List New Product</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeSidebar}
                  to="/purchases"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <span className="item">My purchases</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
