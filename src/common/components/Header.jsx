import React, { useState } from "react";
import parseJson from "../helpers/parseJSON";
import "./Header.css";

export default function Header({ setShowSidebar }) {
  const user = parseJson(localStorage.getItem("user"));

  const handleClick = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="page-nav">
      <div className="d-flex justify-content-between">
        <span onClick={() => setShowSidebar(true)} className="menu d-lg-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
          </svg>
        </span>

        <div className="d-flex align-items-center">
          <div className="user-info">
            <span className="email">{user.email}</span>
            <br />
            <h6 className="font-weight-bold">{user.name}</h6>
          </div>
          <div className="avatar"></div>
          <svg
            onClick={handleClick}
            xmlns="http://www.w3.org/2000/svg"
            className="logout"
            viewBox="0 0 512 512"
          >
            <path
              d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}
