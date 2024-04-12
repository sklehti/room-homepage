import angleLeftIcon from "./../../assets/images/icon-angle-left.svg";
import angleRightIcon from "./../../assets/images/icon-angle-right.svg";

const ArrowButton = ({ setCaruselView, caruselView }: CarouselProp) => {
  return (
    <>
      <button
        className="bg-black px-4 py-3 lg:py-4 lg:px-5 cursor-pointer"
        onClick={() => setCaruselView(caruselView - 1)}
      >
        <img src={angleLeftIcon} alt="angle left icon" className="w-2" />
      </button>
      <button
        className="bg-black px-4 py-3  lg:py-4 lg:px-5 cursor-pointer"
        onClick={() => setCaruselView(caruselView + 1)}
      >
        <img src={angleRightIcon} alt="angle right icon" className="w-2" />
      </button>
    </>
  );
};

export default ArrowButton;
