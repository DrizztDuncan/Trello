// import Image from "next/image";
import { useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Sidebar from "./components/Sidebar";


export default function Layout() {

  const [expanded, setExpanded] = useState(false);
  
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Board />
      </div>
    </>
  );
}
