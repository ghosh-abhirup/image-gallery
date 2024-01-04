import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-full">
        <div className="relative w-full navbarParent">
          <Navbar />
        </div>
        <div className="relative w-full h-full pageParent bg-white dark:bg-[#232323]">
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default App;
