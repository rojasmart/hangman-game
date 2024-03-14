import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import Game from "./pages/Game";
import Rules from "./pages/Rules";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainMenu />} />
          <Route path="/game" element={<Game />} />
          <Route path="/game/:categoryName" element={<CategoryPage />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
