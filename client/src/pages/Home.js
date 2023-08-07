import NavComponent from "../components/NavComponent";
import FooterComponent from "../components/FooterComponent";
import SearchComponent from "../components/SearchComponent";
import ResultComponent from "../components/ResultComponent";

const Home = () => {
  return (
    <div>
      <NavComponent />
      <div className="row">
        <SearchComponent />
        <ResultComponent />
      </div>
      <FooterComponent />
    </div>
  );
};

export default Home;
