import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx"; 
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
