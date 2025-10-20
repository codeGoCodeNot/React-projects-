const Main = () => {
  return (
    <main className="p-4 mx-auto flex flex-col justify-center items-center w-full h-full bg-[#282D35] bg-[url(/src/assets/react.png)] bg-no-repeat bg-[right_70%]">
      <h1 className="text-white text-3xl mb-[.8em] font-black  text-4xl z-1">
        Fun facts about React
      </h1>
      <ul className="text-white ml-[10.2em] list-disc text-lg z-1">
        <li>Was released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
};

export default Main;
