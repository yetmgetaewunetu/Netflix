import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleVideo from "./Components/Video/SingleVideo";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/single/:id" element={<SingleVideo />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
