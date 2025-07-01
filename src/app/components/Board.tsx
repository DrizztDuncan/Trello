import BoardHeader from "./BoardHeader";
import BoardBody from "./BoardBody";
// import { useState, useEffect } from "react";

export default function Board() {

// const [sideBarExpanded, setSideBarExpanded] = useState<boolean>(false);

  return (
    <div className="w-full">
      <BoardHeader />
      <BoardBody />
    </div>
  );
}
