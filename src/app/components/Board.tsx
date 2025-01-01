import BoardHeader from "./BoardHeader";
import BoardBody from "./BoardBody";

export default function Board() {
  return (
    <div className="w-full">
      <BoardHeader />
      <BoardBody />
    </div>
  );
}
