import React from "react";
import { Navbar } from "../components/Navbar";
import { BrowserRouter, Routes } from "react-router-dom";
import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
        <Navbar/>
        <Hero/>
    </div>
  );
};
