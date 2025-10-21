import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#161619] shadow-3xl p-7 rounded-b-2xl flex justify-center -items-center gap-10">
        <button className="bg-[#918E9B] w-[33px] h-[33px] rounded-md cursor-pointer">
          <FaTwitter className="w-[25px] h-[25px] m-auto" />
        </button>
        <button className="bg-[#918E9B] w-[33px] h-[33px] rounded-md cursor-pointer">
          <FaFacebook className="w-[25px] h-[25px] m-auto" />
        </button>
        <button className="bg-[#918E9B] w-[33px] h-[33px] rounded-md cursor-pointer">
          <FaInstagram className="w-[25px] h-[25px] m-auto" />
        </button>
        <button className="bg-[#918E9B] w-[33px] h-[33px] rounded-md cursor-pointer">
          <FaGithub className="w-[25px] h-[25px] m-auto " />
        </button>
      </footer>
    </>
  );
};

export default Footer;
