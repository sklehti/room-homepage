import React, { useEffect, useState } from "react";
import HomePage from "../homePage/HomePage";
import NavBar from "../navbar/Navbar";
import "./MainPage.css";
import { Route, Routes } from "react-router-dom";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import {
  HamburgerProps,
  HamburgerStateProps,
  NavbarStateProps,
} from "../../types";

const Mainpage = () => {
  const [openMenu, setOpenMenu] = useState(NavbarStateProps.DefaultState);

  const handleOpen = () => {
    setOpenMenu(NavbarStateProps.OpenState);
  };

  return (
    <div className="relative flex w-screen flex-row justify-center lg:bg-black">
      <div className="max-w-xs md:max-w-sm lg:max-w-full lg:w-full">
        <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu} />

        <nav>
          {openMenu === NavbarStateProps.OpenState ? (
            <></>
          ) : (
            <button
              onClick={handleOpen}
              className="absolute z-10 py-10 px-6 lg:hidden"
            >
              <img
                className="w-7 hamburger-layout"
                src={hamburgerIcon}
                alt="hamburger icon"
              />
            </button>
          )}
        </nav>

        <main>
          <Routes>
            <Route
              element={
                <Contact setOpenMenu={setOpenMenu} openMenu={openMenu} />
              }
              path="/contact"
            />
            <Route
              element={<About setOpenMenu={setOpenMenu} openMenu={openMenu} />}
              path="/about"
            />
            <Route
              element={<Shop setOpenMenu={setOpenMenu} openMenu={openMenu} />}
              path="/shop"
            />
            <Route
              element={
                <HomePage setOpenMenu={setOpenMenu} openMenu={openMenu} />
              }
              path="/"
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Mainpage;

export const About = ({ openMenu, setOpenMenu }: HamburgerProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    openMenu === NavbarStateProps.OpenState &&
    ref.current &&
    ref.current.scrollLeft < 1024
      ? setOpenMenu(NavbarStateProps.CloseState)
      : "";
  }, []);

  return (
    <div className="flex flex-col px-4 justify-center h-screen lg:w-full lg:max-w-full bg-slate-500">
      <h2 className="text-2xl p-2 text-center">About page coming later...</h2>
    </div>
  );
};

export const Shop = ({ openMenu, setOpenMenu }: HamburgerProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    openMenu === NavbarStateProps.OpenState &&
    ref.current &&
    ref.current.scrollLeft < 1024
      ? setOpenMenu(NavbarStateProps.CloseState)
      : "";
  }, []);

  return (
    <div className="flex flex-col px-4 justify-center h-screen lg:w-full lg:max-w-full bg-slate-500">
      <h2 className="text-2xl p-2 text-center">Shop page coming later...</h2>
    </div>
  );
};

export const Contact = ({ openMenu, setOpenMenu }: HamburgerProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    openMenu === NavbarStateProps.OpenState &&
    ref.current &&
    ref.current.scrollLeft < 1024
      ? setOpenMenu(NavbarStateProps.CloseState)
      : "";
  }, []);

  return (
    <div className="flex flex-col px-4 justify-center h-screen lg:w-full lg:max-w-full bg-slate-500">
      <h2 className="text-2xl p-2 text-center">Contact page coming later...</h2>
    </div>
  );
};
