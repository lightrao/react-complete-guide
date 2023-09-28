import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
              // style={({ isActive }) => ({
              //   textAlign: isActive ? "center" : "left",
              // })}
              end={true} //only be considered active if the currently active route ends with this path("/")
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
