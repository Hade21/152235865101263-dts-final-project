import React from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "../../pages/detail";
import Home from "../../pages/home";
import Login from "../../pages/login";
import Register from "../../pages/register";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default Router;
