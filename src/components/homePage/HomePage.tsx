import hero1Icon from "./../../assets/images/desktop-image-hero-1.jpg";
import hero2Icon from "./../../assets/images/desktop-image-hero-2.jpg";
import hero3Icon from "./../../assets/images/desktop-image-hero-3.jpg";
import hero1MobileIcon from "./../../assets/images/mobile-image-hero-1.jpg";
import hero2MobileIcon from "./../../assets/images/mobile-image-hero-2.jpg";
import hero3MobileIcon from "./../../assets/images/mobile-image-hero-3.jpg";
import imgAboutDarkIcon from "./../../assets/images/image-about-dark.jpg";
import imgAboutLightIcon from "./../../assets/images/image-about-light.jpg";
import arrowIcon from "./../../assets/images/icon-arrow.svg";
import ArrowButton from "./ArrowButton";
import "./HomePage.css";
import { data } from "../../data";
import React, { useEffect, useState } from "react";
import { HamburgerProps, NavbarStateProps } from "../../types";

const HomePage = ({ openMenu, setOpenMenu }: HamburgerProps) => {
  const [moveImgCarousel, setMoveImgCarousel] = useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    openMenu === NavbarStateProps.OpenState &&
    ref.current &&
    ref.current.scrollLeft < 1024
      ? setOpenMenu(NavbarStateProps.CloseState)
      : "";
  }, []);

  useEffect(() => {
    if (ref.current?.offsetWidth)
      ref.current.scrollLeft = ref.current.offsetWidth;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current?.offsetWidth) {
        ref.current.scrollLeft = ref.current.offsetWidth;

        if (ref.current?.scrollLeft > 1023) {
          setOpenMenu(NavbarStateProps.DefaultState);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
      <div
        ref={ref}
        className="flex overflow-x-hidden max-w-[400px] lg:w-full lg:max-w-full"
      >
        {data.map((d, index) => (
          <div
            key={index}
            className={
              moveImgCarousel === -1
                ? "lg:flex bg-white max-w-full min-w-full slider-left"
                : moveImgCarousel === 1
                ? "lg:flex bg-white max-w-full min-w-full slider-right"
                : "lg:flex bg-white max-w-full min-w-full"
            }
          >
            <div className="relative lg:max-h-[60vh] lg:w-[65vw]">
              <img
                src={
                  index === 1 || index === 4
                    ? hero1MobileIcon
                    : index === 2
                    ? hero2MobileIcon
                    : hero3MobileIcon
                }
                alt=" hero 1"
                className="w-full h-full lg:hidden"
              />
              <img
                src={
                  index === 1 || index === 4
                    ? hero1Icon
                    : index === 2
                    ? hero2Icon
                    : hero3Icon
                }
                alt=" hero 1"
                className="w-full h-full hidden lg:block"
              />
              <div
                className="absolute bottom-0 right-0 lg:hidden"
                style={
                  moveImgCarousel === 1 || moveImgCarousel === -1
                    ? { pointerEvents: "none" }
                    : {}
                }
              >
                <ArrowButton
                  navRef={ref}
                  setMoveImgCarousel={setMoveImgCarousel}
                />
              </div>
            </div>

            <div className="p-4 relative lg:max-h-[60vh] lg:w-[65vw] lg:flex lg:justify-center">
              <div className="lg:flex lg:justify-center lg:flex-col  lg:max-w-xs">
                <h2 className="text-3xl font-bold pt-7 pb-5 tracking-tight lg:py-2 lg:text-2xl">
                  {d.title}
                </h2>
                <p>{d.information}</p>

                <button className="flex flex-row py-10 text-xs items-center tracking-[10px] uppercase font-semibold">
                  Shop now
                  <img
                    src={arrowIcon}
                    alt="arrow icon"
                    className="pl-5 hover:pl-6"
                  />
                </button>
                <div
                  className="lg:absolute hidden lg:block lg:bottom-0 lg:left-0"
                  style={
                    moveImgCarousel === 1 || moveImgCarousel === -1
                      ? { pointerEvents: "none" }
                      : {}
                  }
                >
                  <ArrowButton
                    navRef={ref}
                    setMoveImgCarousel={setMoveImgCarousel}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:flex lg:justify-between bg-white lg:space">
        <div className="relative ">
          <img src={imgAboutDarkIcon} alt=" hero 1" className="w-full h-full" />
        </div>

        <div className="p-4 relative lg:w-2/5 lg:flex lg:justify-center">
          <div className="lg:flex lg:justify-center lg:flex-col  lg:max-w-xs">
            <h2 className="text-base font-bold py-4 lg:py-2 uppercase tracking-wider">
              About our furniture
            </h2>
            <p className="pb-3 lg:pb-0">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={imgAboutLightIcon}
            alt=" hero 1"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
