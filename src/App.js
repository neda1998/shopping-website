import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Beauty from "./pages/Beauty";
import Sport from "./pages/Sport";
import Template from "./pages/Template";
import Explore from "./pages/Explore";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="beauty" element={<Beauty />} />
        <Route path="sport" element={<Sport />} />
        <Route path="template" element={<Template />} />
        <Route path="explore" element={<Explore />} />
      </Routes>
    </>
  );
}

export default App;
