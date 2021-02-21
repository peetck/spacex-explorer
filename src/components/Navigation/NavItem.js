import { NavLink, useLocation } from "react-router-dom";

const NavItem = ({ path, exact, children }) => {
  const location = useLocation();

  return (
    <li className="border-t border-gray-500 md:border-none">
      <NavLink
        to={location.pathname === path ? path + location.search : path}
        className="block px-4 py-2 no-underline text-grey-darkest hover:text-grey-darker md:inline-block"
        exact={exact}
        activeClassName="border border-white rounded-full bg-white text-black font-bold"
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
