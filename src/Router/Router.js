import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import Home from "../page/Home/"
import Flight from "../page/Flight";
import News from "../page/News";
import Guidance from "../page/Guidance";
import Contact from "../page/Contact";
import LoginPage from "../page/Auth/user/Login";
import RegisterPage from "../page/Auth/user/Register";
import NotFound from "../page/404/404";
import Personal from "../page/Personal/Profile";
import SearchPage from "../page/Search";
import BookPage from "../page/Book";

const AppRoutes = () => {
  return (
    <Routes>
      {/* User */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Flight />} />
      <Route path="/news" element={<News />} />
      <Route path="/guidance" element={<Guidance />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<Personal />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/bookticket" element={<BookPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;