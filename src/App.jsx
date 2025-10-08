import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<Work />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
