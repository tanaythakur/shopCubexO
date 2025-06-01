import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-gradient-to-b from-purple-950 to-purple-500  text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold hover:text-white-200 transition-colors"
        >
          ShopCubexO
        </Link>

        <div className="flex items-center space-x-6">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `px-4 py-2 rounded  ${
                isActive ? "bg-white-800" : "hover:bg-purple-500"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/sign-up"
            className="flex items-center space-x-6"
          > Sign-Up
          </NavLink>

          <NavLink
            to="/login"
            className="flex items-center space-x-6"
          > Login
          </NavLink>

          <NavLink
            to="/cart"
            className="relative p-2 hover:bg-white-700 rounded transition-colors"
          >
            <span className="text-2xl hover:brightness-150 rounded-full">🛒</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


