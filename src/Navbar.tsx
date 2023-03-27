import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-f90045 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Inventory Management
        </span>
      </div>
      <div className="flex">
        <NavLink
          to="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/hardware-in-use"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
        >
          Hardware in Use
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
