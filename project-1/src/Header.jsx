const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center border-b border-[#27292c] shadow-lg">
      <img
        className="w-[40px] h-[40px]"
        src="/src/assets/react.svg"
        alt="React logo"
      />
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
