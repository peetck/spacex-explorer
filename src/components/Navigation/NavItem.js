import { NavLink } from "react-router-dom";

const NavItem = ({ path, exact, children }) => {
  return (
    <li className="border-t border-gray-500 md:border-none">
      <NavLink
        to={path}
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
