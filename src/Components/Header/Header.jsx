import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex gap-4">
      <NavLink
        to="/home"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active"
            : "bg-orange-400 rounded-lg p-2 text-white"
        }
      >
        {" "}
        <button>Home</button>{" "}
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active"
            : "bg-orange-400 rounded-lg p-2 text-white"
        }
      >
        {" "}
        <button>Products</button>{" "}
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active"
            : "bg-orange-400 rounded-lg p-2 text-white"
        }
      >
        {" "}
        <button>Contact</button>{" "}
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active"
            : "bg-orange-400 rounded-lg p-2 text-white"
        }
      >
        {" "}
        <button>About</button>{" "}
      </NavLink>
    </nav>
  );
};

export default Header;
