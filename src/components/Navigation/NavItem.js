import { NavLink, useLocation } from "react-router-dom";

const NavItem = ({ path, exact, children }) => {
  const location = useLocation();

  return (
    <li className="border-t border-gray-500 md:border-none">
      <NavLink
        to={location.pathname === path ? path + location.search : path}
        className="block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker md:inline-block"
        activeClassName="font-black"
        exact={exact}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
