import React, { useEffect, useState } from "react";
import HomePage from "../homePage/HomePage";
import NavBar from "../navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import { HamburgerProps, NavbarStateProps } from "../../types";
import { Helmet } from "react-helmet";

const Mainpage = () => {
  const [openMenu, setOpenMenu] = useState(NavbarStateProps.DefaultState);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (
        (ref.current && ref.current.scrollWidth > 1023) ||
        window.innerWidth > 2023
      ) {
        setOpenMenu(NavbarStateProps.DefaultState);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (event.key === "Tab") {
  //       event.preventDefault();
  //       console.log("Tab key doesn't work yet!");
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  const handleOpen = () => {
    setOpenMenu(NavbarStateProps.OpenState);
  };

  return (
    <div ref={ref} className="relative flex w-screen flex-row justify-center">
      <h1 className="absolute z-10 py-10 mb-[-100px] text-center text-white text-xl lg:hidden">
        room
      </h1>
      <div className="w-full max-w-[500px] lg:max-w-full lg:w-full">
        <nav>
          {openMenu === NavbarStateProps.OpenState ? (
            <></>
          ) : (
            <>
              <button
                tabIndex={0}
                onClick={handleOpen}
                onKeyDown={(event) => {
                  if (event.key === "Tab") {
                    handleOpen();
                  }
                }}
                className="absolute z-10 py-10 px-6 lg:hidden"
              >
                <img
                  className="w-7 hamburger-layout"
                  src={hamburgerIcon}
                  alt="hamburger icon"
                />
              </button>
            </>
          )}

          <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
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
  useEffect(() => {
    openMenu === NavbarStateProps.OpenState
      ? setOpenMenu(NavbarStateProps.CloseState)
      : "";
  }, []);

  return (
    <div className="flex flex-col px-4 justify-center h-screen lg:w-full lg:max-w-full bg-slate-500">
      <Helmet>
        <title>About page</title>
      </Helmet>
      <h2 className="text-2xl p-2 text-center">About page coming later...</h2>
    </div>
  );
};

export const Shop = ({ openMenu, setOpenMenu }: HamburgerProps) => {
  useEffect(() => {
    openMenu === NavbarStateProps.OpenState
      ? setOpenMenu(NavbarStateProps.CloseState)
      : "";
  }, []);

  return (
    <div className="flex flex-col px-4 justify-center h-screen lg:w-full lg:max-w-full bg-slate-500">
      <Helmet>
        <title>Shop page</title>
      </Helmet>
      <h2 className="text-2xl p-2 text-center">Shop page coming later...</h2>
    </div>
  );
};

export const Contact = ({ openMenu, setOpenMenu }: HamburgerProps) => {
  useEffect(() => {
    openMenu === NavbarStateProps.OpenState
      ? setOpenMenu(NavbarStateProps.CloseState)
      : "";
  }, []);

  return (
    <div className="flex flex-col px-4 justify-center h-screen lg:w-full lg:max-w-full bg-slate-500">
      <Helmet>
        <title>Contact page</title>
      </Helmet>
      <h2 className="text-2xl p-2 text-center">Contact page coming later...</h2>
    </div>
  );
};
