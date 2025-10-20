const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center border-b border-[#27292c] shadow-lg">
      <div className="flex gap-5 items-center ml-2">
        <img
          className="w-[40px] h-[40px]"
          src="/src/assets/react.svg"
          alt="React logo"
        />
        <h1 className="font-black  text-5xl text-[#5ed1f2]">ReactFacts</h1>
      </div>
      <nav>
        <ul className="flex gap-3 px-3">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
