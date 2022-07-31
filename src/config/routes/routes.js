import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedComponents } from "../../components";
import Detail from "../../pages/detail";
import Home from "../../pages/home";
import Login from "../../pages/login";
import Register from "../../pages/register";

const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedComponents>
              <Home />
            </ProtectedComponents>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedComponents loginOnly={false}>
              <Login />
            </ProtectedComponents>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/book/:id"
          element={
            <ProtectedComponents>
              <Detail />
            </ProtectedComponents>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
