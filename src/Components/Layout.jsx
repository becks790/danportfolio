import React from "react";

import { Outlet } from 'react-router-dom'
import Footer from "./Footer";
import Navbar from "./Navbar";
// import Home from "./Home";

export default function Layout() {
  return (
    <>
      <Navbar />
      
      <div className="container">
        <Outlet />
        
        {/* <About /> */}
        {/* <Contact /> */}
      </div>

      <Footer />
    </>
  );
}
