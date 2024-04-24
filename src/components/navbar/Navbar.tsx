import { NavLink } from "react-router-dom";
import closeIcon from "../../assets/images/icon-close.svg";
import "./Navbar.css";
import { HamburgerProps, NavbarStateProps } from "../../types";

const NavBar = ({ openMenu, setOpenMenu }: HamburgerProps) => {
  const handleClose = () => {
    setOpenMenu(NavbarStateProps.CloseState);
    setTimeout(() => {
      setOpenMenu(NavbarStateProps.DefaultState);
    }, 500);
  };

  return (
    <div
      className={
        openMenu === NavbarStateProps.OpenState
          ? "fixed left-0 top-0 w-screen h-screen z-20"
          : openMenu === NavbarStateProps.CloseState
            ? "fixed left-0 top-0 w-screen lg:top-0 z-20"
            : "fixed left-0 top-0 w-screen lg:top-0 z-20"
      }
    >
      <div
        className={
          openMenu === NavbarStateProps.DefaultState
            ? "mt-[-100px] lg:mt-0 navbar"
            : openMenu === NavbarStateProps.OpenState
              ? "nav-animation-open navbar"
              : "nav-animation-close navbar"
        }
      >
        <ul className="flex flex-row justify-center py-10 font-bold lowercase text-[0.95rem] lg:justify-start lg:text-white lg:flex">
          <li className="cursor-pointer  px-[4vw] lg:hidden">
            <button
              onClick={handleClose}
              className="flex flex-col justify-center py-1 cursor-pointer"
            >
              <img
                className="w-4 h-4 opacity-[.201] hover:opacity-100"
                src={closeIcon}
                alt="close icon"
              />
            </button>
          </li>

          <li className="px-[4vw]">
            <NavLink className="cursor-pointer  hover:text-[#747373]" to="/">
              Home
              <hr className="hidden" />
            </NavLink>
          </li>
          <li className="px-[4vw]">
            <NavLink
              className="cursor-pointer  hover:text-[#747373]"
              to="/shop"
            >
              Shop
              <hr className="hidden" />
            </NavLink>
          </li>
          <li className="px-[4vw]">
            <NavLink
              className="cursor-pointer  hover:text-[#747373]"
              to="/about"
            >
              About
              <hr className="hidden" />
            </NavLink>
          </li>
          <li className="px-[4vw] md:px-5">
            <NavLink
              className="cursor-pointer  hover:text-[#747373]"
              to="/contact"
            >
              Contact
              <hr className="hidden" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
