import { NavLink, useLocation } from "react-router-dom";

const NavItem = ({ path, exact, children }) => {
  const location = useLocation();

  return (
    <li className="border-t border-gray-500 md:border-none">
      <NavLink
        to={location.pathname === path ? path + location.search : path}
        className="block px-4 py-2 no-underline text-grey-darkest hover:text-grey-darker md:inline-block"
        exact={exact}
        activeClassName="font-bold md:border md:border-white md:rounded-full md:bg-white md:text-black"
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
