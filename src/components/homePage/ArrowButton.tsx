import angleLeftIcon from "./../../assets/images/icon-angle-left.svg";
import angleRightIcon from "./../../assets/images/icon-angle-right.svg";

interface Prop {
  navRef: React.RefObject<HTMLDivElement>;
  setMoveImgCarousel: React.Dispatch<React.SetStateAction<number>>;
}

const ArrowButton = ({ navRef, setMoveImgCarousel }: Prop) => {
  const sideScrollRight = (element: HTMLDivElement, step: number) => {
    if (
      navRef.current?.offsetWidth &&
      element.scrollLeft < navRef.current?.offsetWidth
    ) {
      element.scrollLeft = navRef.current?.offsetWidth * 3;
    }

    setMoveImgCarousel(1);

    setTimeout(() => {
      element.scrollLeft -= step;
      setMoveImgCarousel(0);
    }, 2001);
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

    setTimeout(() => {
      element.scrollLeft -= step;
      setMoveImgCarousel(0);
    }, 2001);
  };

  return (
    <>
      <button
        className="bg-black px-4 py-3 lg:py-4 lg:px-5 cursor-pointer"
        onClick={() => {
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
        className="bg-black px-4 py-3  lg:py-4 lg:px-5 cursor-pointer"
        onClick={() => {
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
