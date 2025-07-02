"use client";
// import Image from "next/image";
import { useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Sidebar from "./components/Sidebar";


export default function Layout() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  
  return (
    <>
      <Header />
      <div className="flex">
      <Sidebar expanded={sidebarOpen} onToggle={() => setSidebarOpen((v) => !v)} />
      <Board sidebarOpen={sidebarOpen} />
      </div>
    </>
  );
}
