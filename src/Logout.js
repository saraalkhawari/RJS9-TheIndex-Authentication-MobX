import React, { Component } from "react";

import { observer } from "mobx-react";

import authStore from "./stores/authStore";

import { NavLink } from "react-router-dom";

const Logout = () => {
  return (
    <>
      <h4 className="menu-item m-5">
        <button
          className="btn btn-danger"
          onClick={() => {
            console.log("Logging Out !");
            authStore.logout();
          }}
        >
          {authStore.user.username + " "}
          Logout
        </button>
      </h4>
    </>
  );
};

export default observer(Logout);
