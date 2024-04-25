import { ArrayButtonClassProp, NavbarStateProps } from "../../types";
import angleLeftIcon from "./../../assets/images/icon-angle-left.svg";
import angleRightIcon from "./../../assets/images/icon-angle-right.svg";

const ArrowButton = ({
  navRef,
  setMoveImgCarousel,
  currentEntry,
  setCurrentEntry,
  setOpenMenu,
  openMenu,
}: ArrayButtonClassProp) => {
  const sideScrollRight = (element: HTMLDivElement, step: number) => {
    if (navRef.current?.offsetWidth && element.scrollLeft === 0) {
      element.scrollLeft = navRef.current?.offsetWidth * 3;
    }

    setMoveImgCarousel(1);

    if (openMenu === NavbarStateProps.OpenState) {
      setOpenMenu(NavbarStateProps.CloseState);

      setTimeout(() => {
        setOpenMenu(NavbarStateProps.DefaultState);
      }, 500);
    }

    if (currentEntry === 0) {
      setCurrentEntry(2);
    } else {
      setCurrentEntry(currentEntry - 1);
    }

    setTimeout(() => {
      element.scrollLeft -= step;
      setMoveImgCarousel(0);
    }, 1800);
  };

  const sideScrollLeft = (
    element: HTMLDivElement,

    step: number
  ) => {
    if (
      navRef.current?.offsetWidth &&
      element.scrollLeft > navRef.current?.offsetWidth * 2
    ) {
      element.scrollLeft = 0;
    }
    setMoveImgCarousel(-1);

    if (openMenu === NavbarStateProps.OpenState) {
      setOpenMenu(NavbarStateProps.CloseState);

      setTimeout(() => {
        setOpenMenu(NavbarStateProps.DefaultState);
      }, 500);
    }

    if (currentEntry === 3) {
      setCurrentEntry(1);
    } else {
      setCurrentEntry(currentEntry + 1);
    }

    setTimeout(() => {
      element.scrollLeft -= step;
      setMoveImgCarousel(0);
    }, 1800);
  };

  return (
    <>
      <button
        className="bg-black px-5 py-5 lg:py-6 lg:px-6 cursor-pointer hover:bg-[#747373]"
        onClick={() => {
          if (navRef.current)
            sideScrollLeft(
              navRef.current,
              -Number(navRef.current?.offsetWidth)
            );
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft")
            if (navRef.current)
              sideScrollLeft(
                navRef.current,
                -Number(navRef.current?.offsetWidth)
              );
        }}
      >
        <img src={angleLeftIcon} alt="angle left icon" className="w-2" />
      </button>
      <button
        className="bg-black px-5 py-5 lg:py-6 lg:px-6 cursor-pointer  hover:bg-[#747373]"
        onClick={() => {
          if (navRef.current)
            sideScrollRight(navRef.current, navRef.current?.offsetWidth);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight")
            if (navRef.current)
              sideScrollRight(navRef.current, navRef.current?.offsetWidth);
        }}
      >
        <img src={angleRightIcon} alt="angle right icon" className="w-2" />
      </button>
    </>
  );
};

export default ArrowButton;
