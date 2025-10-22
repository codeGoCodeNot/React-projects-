import Header from "./components/Header";
import Article from "./components/Article";

function App({ data }) {
  return (
    <>
      <Header />
      {data.map((data, idx) => (
        <Article key={idx} details={data} />
      ))}
    </>
  );
}

export default App;
