import Main from "./MyMain.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Main className="flex-1 flex items-center justify-center" />
      <Footer />
    </>
  );
};

export default App;
