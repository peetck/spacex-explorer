import { NavLink } from "react-router-dom";

const NavItem = ({ path, exact, children }) => {
  return (
    <li className="border-t md:border-none">
      <NavLink
        to={path}
        className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
        activeClassName="font-bold"
        exact={exact}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
