type SidebarProps = {
  expanded: boolean;
  onToggle: () => void;
};

export default function Sidebar({expanded, onToggle}: SidebarProps) {

  return (
    <div className={`${expanded ? "w-48" : "w-4"} h-screen z-10 transition-all duration-300`}>
      <button className="w-6 rounded-full border mx-1 my-2 bg-background" onClick={onToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <div className={expanded ? "block" : "hidden"}>SideBar</div>
    </div>
  );
}
