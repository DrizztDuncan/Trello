type SidebarProps = {
  expanded: boolean;
  onToggle: () => void;
};

export default function Sidebar({ expanded, onToggle }: SidebarProps) {
  return (
    <div
      className={`${expanded ? "w-48" : "w-4"} h-screen z-10 transition-all duration-300 relative`}
    >
      <button
        className="absolute top-2 -right-3 w-6 rounded-full border bg-background"
        onClick={onToggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M10.811,18.707,9.4,17.293,14.689,12,9.4,6.707l1.415-1.414L16.1,10.586a2,2,0,0,1,0,2.828Z"
          />
        </svg>
      </button>
      <div className={expanded ? "block" : "hidden"} />
    </div>
  );
}
