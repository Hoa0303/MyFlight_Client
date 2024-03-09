import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from "../page/Home/"
import Flight from "../page/Flight";
import News from "../page/News";
import Guidance from "../page/Guidance";
import Contact from "../page/Contact";
// import Resume from "../components/Resume/ResumeNew";
import LoginPage from "../page/Auth/user/Login";
import RegisterPage from "../page/Auth/user/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Flight />} />
      <Route path="/news" element={<News />} />
      <Route path="/guidance" element={<Guidance />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;