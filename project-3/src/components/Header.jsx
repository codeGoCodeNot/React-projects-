import { FaGlobe } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#F55A5A] w-full">
      <div
        className="
      container
      font-semibold text-[#FFFFFF] 
      flex justify-center items-center min-w-full
      py-4 md:p-6 lg:p-10 xl:p-12 2xl:p-14
      gap-2 lg:gap-4 2xl:gap-5
      text-lg md:text-xl xl:text-2xl 2xl:text-3xl
      "
      >
        <FaGlobe
          className="
        globe
        text-2xl
        md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
        "
        />
        <h1>my travel journal.</h1>
      </div>
    </header>
  );
};
export default Header;
