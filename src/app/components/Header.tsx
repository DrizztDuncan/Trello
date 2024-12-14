export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white shadow-md border-b border-gray-200">
      <svg className="h-5 w-5 m-2">
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M16,16 L20,16 L20,20 L16,20 L16,16 Z M10,16 L14,16 L14,20 L10,20 L10,16 Z M4,16 L8,16 L8,20 L4,20 L4,16 Z M16,10 L20,10 L20,14 L16,14 L16,10 Z M10,10 L14,10 L14,14 L10,14 L10,10 Z M4,10 L8,10 L8,14 L4,14 L4,10 Z M16,4 L20,4 L20,8 L16,8 L16,4 Z M10,4 L14,4 L14,8 L10,8 L10,4 Z M4,4 L8,4 L8,8 L4,8 L4,4 Z"
          id="Shape"
        ></path>
      </svg>
      <div className="relative w-full h-full bg-[url('https://trello.com/assets/d947df93bc055849898e.gif')] bg-no-repeat bg-center bg-contain"></div>
      <>Workplaces</>
      <>Recent</>
      <>Starred</>
      <>Templates</>
      <>Create</>
      <>SearchBar</>
      <>Notification</>
      <>Information</>
      <>Account</>
    </header>
  );
}
