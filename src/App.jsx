import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;
