import { useState } from "react";
import NavbarV from "./components/NavbarV";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import { Navbar } from "./components";
import SidebarContent from "./components/SiderbarContent";
import Domain from "./pages/Domains";
import Event from "./pages/events";
import Members from "./pages/Members";

function App() {
  return (
    <>
      <NavbarV />
      <hr className="opacity-40" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/team" element={<SidebarContent />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/events" element={<Event />} />
        <Route path="/members" element={<Members />} />
      </Routes>
      <hr className="opacity-40" />
      <Footer />
    </>
  );
}

export default App;
