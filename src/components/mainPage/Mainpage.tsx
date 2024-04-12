import HomePage from "../homePage/HomePage";
import "./MainPage.css";

const Mainpage = () => {
  return (
    <div className="flex w-screen flex-row justify-center lg:bg-black">
      <div className="max-w-xs md:max-w-sm lg:max-w-full lg:w-full">
        <nav></nav>
        <main>
          <HomePage />
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Mainpage;
