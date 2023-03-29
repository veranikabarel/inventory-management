import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-f90045 p-4">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Inventory Management
        </span>
      </div>
      <div className="flex">
        <NavLink
          to="/"
          className="block px-4 py-2 mt-4 font-semibold rounded-lg hover:bg-gray-700 hover:text-gray-100"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/hardware-in-use"
          className="block px-4 py-2 mt-4 font-semibold rounded-lg hover:bg-gray-700 hover:text-gray-100"
        >
          Hardware in Use
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
