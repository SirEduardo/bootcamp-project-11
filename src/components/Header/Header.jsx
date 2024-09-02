import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-20 bg-yellow-400 flex items-center justify-center">
      <nav className=" w-full flex justify-around list-none font-semibold">
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? "border-b-2 border-black" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className={({isActive}) => isActive ? "border-b-2 border-black" : ""}>
            Search Pokemon
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => isActive ? "border-b-2 border-black" : ""}>
            About
          </NavLink>
        </li>
      </nav>
    </header>
  );
};

export default Header;
