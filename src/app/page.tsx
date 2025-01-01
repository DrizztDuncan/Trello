// import Image from "next/image";
import Header from "./components/Header";
import Board from "./components/Board";
import Sidebar from "./components/Sidebar";

export default function Home() {
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
