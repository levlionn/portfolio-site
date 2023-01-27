const Navbar = () => {
  return (
    <div className="flex mx-4 justify-between py-10 px-5 items-center">
      <h3>devlopedbylev</h3>
      <ul className="flex items-center">
        <li className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </li>
        <li className="bg-blue-100 hover:bg-blue-200 p-1 rounded">
          <a href="#">Say Hello</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
