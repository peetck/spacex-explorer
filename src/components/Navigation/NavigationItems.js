import NavigationItem from "./NavigationItem";
import "./NavigationItems.css";
import navIcon from "../../assets/images/icon.png";

const NavigationItems = (props) => {
  return (
    <nav className="nav flex flex-wrap items-center justify-between px-4 mb-5">
      <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
        <img src={navIcon} alt="Can't fetch img" className="h-10 mr-2 w-10" />
        <span className="font-semibold text-xl tracking-tight">
          SpaceX Explorer
        </span>
      </div>

      <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
        htmlFor="menu-btn"
      >
        <span className="icon bg-grey-darkest flex items-center relative"></span>
      </label>

      <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
        <NavigationItem path="/" exact>
          Home
        </NavigationItem>
        <NavigationItem path="/rockets">Rockets</NavigationItem>
        <NavigationItem path="/launches">Launches</NavigationItem>
      </ul>
    </nav>
  );
};

export default NavigationItems;
