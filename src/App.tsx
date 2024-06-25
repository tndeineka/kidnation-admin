import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Authorization/LoginForm/LoginForm";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
    </Routes>
  );
};
