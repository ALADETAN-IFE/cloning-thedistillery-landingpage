import Categories from "./components/Categories";
import HeroPage from "./components/HeroPage";
import HowItWorks from "./components/HowItWorks";
import NewsLetter from "./components/NewsLetter";
import Recommended from "./components/Recommended";
import "./App.css"

const App = () => {
  return (
    <div className="app">
      <HeroPage />
      <HowItWorks />
      <Recommended />
      <Categories />
      <NewsLetter />
    </div>
  );
};

export default App;
