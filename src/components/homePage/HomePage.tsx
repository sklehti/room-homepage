import hero1Icon from "./../../assets/images/desktop-image-hero-1.jpg";
import hero1MobileIcon from "./../../assets/images/mobile-image-hero-1.jpg";
import imgAboutDarkIcon from "./../../assets/images/image-about-dark.jpg";
import imgAboutLightIcon from "./../../assets/images/image-about-light.jpg";
import arrowIcon from "./../../assets/images/icon-arrow.svg";
import ArrowButton from "./ArrowButton";
import "./HomePage.css";
import { data } from "../../data";
import { useState } from "react";

const HomePage = () => {
  const [caruselView, setCaruselView] = useState(1);

  return (
    // TODO: use slide effect in carousel
    <section className="lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
      <div className="lg:flex bg-white">
        <div className="relative lg:max-h-[60vh] lg:w-[65vw]">
          <img
            // TODO: change images
            src={hero1MobileIcon}
            alt=" hero 1"
            className="w-full h-full lg:hidden"
          />
          <img
            src={hero1Icon}
            alt=" hero 1"
            className="w-full h-full hidden lg:block"
          />
          <div className="absolute bottom-0 right-0 lg:hidden">
            <ArrowButton
              setCaruselView={setCaruselView}
              caruselView={caruselView}
            />
          </div>
        </div>

        <div className="p-4 relative lg:max-h-[60vh] lg:w-[65vw] lg:flex lg:justify-center">
          <div className="lg:flex lg:justify-center lg:flex-col  lg:max-w-xs">
            <h2 className="text-3xl font-bold pt-7 pb-5 tracking-tight lg:py-2 lg:text-2xl">
              {caruselView === 1
                ? data[0].title
                : caruselView === 2
                ? data[1].title
                : data[2].title}
            </h2>
            <p>
              {caruselView === 1
                ? data[0].information
                : caruselView === 2
                ? data[1].information
                : data[2].information}
            </p>

            <button className="flex flex-row py-10 text-xs items-center tracking-[10px] uppercase font-semibold">
              Shop now
              <img
                src={arrowIcon}
                alt="arrow icon"
                className="pl-5 hover:pl-6"
              />
            </button>
            <div className="lg:absolute hidden lg:block lg:bottom-0 lg:left-0">
              <ArrowButton
                setCaruselView={setCaruselView}
                caruselView={caruselView}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:justify-betwee bg-white lg:space">
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
