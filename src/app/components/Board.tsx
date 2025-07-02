type BoardProps = {
  sidebarOpen: boolean;
};


import BoardHeader from "./BoardHeader";
import BoardBody from "./BoardBody";
// import { useState, useEffect } from "react";

export default function Board({sidebarOpen}: BoardProps) {

// const [sideBarExpanded, setSideBarExpanded] = useState<boolean>(false);

  return (
    <div className={`transition-all duration-300 ${sidebarOpen ? "w-[calc(100%-12rem)]" : "w-full"}`}>
      <BoardHeader />
      <BoardBody />
    </div>
  );
}
