// import Image from "next/image";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <Board />
    </>
  );
}
