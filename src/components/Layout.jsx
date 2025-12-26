// src/components/Layout.jsx
import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />          {/* Navbar at the top */}
      <main className="flex-1">{children}</main> {/* Page content */}
      <Footer />          {/* Optional Footer */}
    </div>
  );
};

export default Layout;
