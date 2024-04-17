import { NavLink } from "react-router-dom";
import closeIcon from "../../assets/images/icon-close.svg";
import "./Navbar.css";
import { HamburgerProps, NavbarStateProps } from "../../types";

const NavBar = ({ openMenu, setOpenMenu }: HamburgerProps) => {
  const handleClose = () => {
    setOpenMenu(NavbarStateProps.CloseState);
  };

  return (
    //TODO: do desktop style next
    <>
      {/* {openMenu ? ( */}
      <div
        className={
          openMenu === NavbarStateProps.OpenState
            ? "fixed left-0 top-0 w-screen h-screen z-10 bg-[rgba(0,0,0,0.4)]"
            : "fixed left-0 top-0 w-screen z-10 lg:top-0"
        }
      >
        <nav
          className={
            openMenu === NavbarStateProps.DefaultState
              ? "mt-[-100px] lg:mt-0 navbar"
              : openMenu === NavbarStateProps.OpenState
              ? "nav-animation-open navbar"
              : "nav-animation-close navbar"
          }
        >
          <ul className="flex flex-row justify-center px-4 py-10 font-bold lowercase text-[0.95rem] lg:justify-start lg:text-white lg:flex">
            <li className="cursor-pointer px-3 md:px-5 lg:hidden">
              <button
                onClick={handleClose}
                className="flex flex-col justify-center p-1 cursor-pointer hover:bg-slate-100 hover:rounded"
              >
                <img className="w-3 h-3" src={closeIcon} alt="close icon" />
              </button>
            </li>

            <li className="cursor-pointer px-3 md:px-5">
              <NavLink
                // className={({ isActive }) =>
                //   isActive ? "text-gray-500 cursor-not-allowed" : ""
                // }
                to="/"
              >
                Home
                <hr className="hidden" />
              </NavLink>
            </li>
            <li className="cursor-pointer px-3 md:px-5">
              <NavLink
                // className={({ isActive }) =>
                //   isActive ? "text-gray-500 cursor-not-allowed" : ""
                // }
                to="/shop"
              >
                Shop
                <hr className="hidden" />
              </NavLink>
            </li>
            <li className="cursor-pointer px-3 md:px-5">
              <NavLink
                // className={({ isActive }) =>
                //   isActive ? "text-gray-500 cursor-not-allowed" : ""
                // }
                to="/about"
              >
                About
                <hr className="hidden" />
              </NavLink>
            </li>
            <li className="cursor-pointer px-3 md:px-5">
              <NavLink
                // className={({ isActive }) =>
                //   isActive ? "text-blue-500 cursor-not-allowed" : ""
                // }
                to="/contact"
              >
                Contact
                <hr className="hidden" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {/* ) : (
        <></>
      )} */}
    </>
  );
};

export default NavBar;
