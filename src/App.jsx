import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import Rules from "./pages/Rules";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainMenu />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
