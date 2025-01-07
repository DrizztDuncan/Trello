import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function Header() {
  const headerBtn = [
    { workspaces: "Workspaces", content: [] },
    { recent: "Recent", content: [] },
    { starred: "Starred", content: [] },
    { templates: "Templates", content: [] },
  ];

  return (
    <header className="flex p-2 items-center justify-between shadow-md border-b border-gray-200">
      {/* Navbar titles */}
      <nav className="flex w-5/12 justify-around">
        <svg className="m-1 h-5 w-5 fill-[#9fadbc]">
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M16,16 L20,16 L20,20 L16,20 L16,16 Z M10,16 L14,16 L14,20 L10,20 L10,16 Z M4,16 L8,16 L8,20 L4,20 L4,16 Z M16,10 L20,10 L20,14 L16,14 L16,10 Z M10,10 L14,10 L14,14 L10,14 L10,10 Z M4,10 L8,10 L8,14 L4,14 L4,10 Z M16,4 L20,4 L20,8 L16,8 L16,4 Z M10,4 L14,4 L14,8 L10,8 L10,4 Z M4,4 L8,4 L8,8 L4,8 L4,4 Z"
            id="Shape"
          ></path>
        </svg>
        <div className="block m-2 w-[75px] h-[15px] bg-[url('https://trello.com/assets/d947df93bc055849898e.gif')] bg-no-repeat bg-center bg-contain"></div>
        <Menu>
          <MenuButton className="flex">
            Workspaces
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </MenuButton>
          <MenuItems anchor="bottom">
            Your Workspaces
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="/settings">
                Duncan's Workspace
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
        <Menu>
          <MenuButton className="flex">
            Recent
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </MenuButton>
          <MenuItems anchor="bottom">
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="/settings">
                Basic Board
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>

        <Menu>
          <MenuButton className="flex">
            Starred
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </MenuButton>
          <MenuItems anchor="bottom">
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="/settings">
                Starred Board
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>

        <Menu>
          <MenuButton className="flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </MenuButton>
          <MenuItems anchor="bottom">
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="/settings">
                Top templates
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
        {/* Responsive Menu button */}
        <Menu>
          <MenuButton className="hidden">
            More
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </MenuButton>
          <MenuItems anchor="bottom">
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="/settings">
                Workspaces
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="/support">
                Recent boards
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="/license">
                Shared boards
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="/license">
                Templates
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
        <button className="bg-dark-blue-primary align-middle">Create</button>
      </nav>

      <div className="flex w-1/4 justify-around">
        <span className="flex py-1 bg-[#121212] rounded px-1">
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input type="text" placeholder="Search..." className="bg-[#121212]" />
        </span>
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
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
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
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
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
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
    </header>
  );
}
