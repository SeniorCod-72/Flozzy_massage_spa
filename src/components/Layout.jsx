// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />          {/* Navbar at the top */}
      <div>
        <Outlet/>
      </div>
      <Footer />          {/* Optional Footer */}
    </div>
  );
};

export default Layout;
