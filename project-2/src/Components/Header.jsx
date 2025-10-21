import profileImg from "../assets/mugen.jpg";

const Header = () => {
  return (
    <header className="w-[420px] shadow-2xl bg-[#1A1B21] rounded-t-2xl overflow-hidden">
      <img
        src={profileImg}
        alt="mugen with shades sleeping"
        className="w-full h-80"
      />
    </header>
  );
};

export default Header;
