import { IoPersonAddOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start flex flex-col md:flex-row">
          <div className="dropdown">
            <div tabindex="0" role="button" className="flex mr-40 btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes </a>
              </li>
              <li>
                <a>About </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">Recipe Calories</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes </a>
            </li>
            <li>
              <a>About </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end mb-9 lg:mb-0">
          <label className="input input-bordered flex items-center gap-2 rounded-full">
          <button><CiSearch/></button>
            <input type="text" className="grow" placeholder="Search" />
            
          </label>
          <span className="ml-4 text-2xl border p-4 bg-green-500 rounded-full">
            <IoPersonAddOutline />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
