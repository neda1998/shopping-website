import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Men from "../../pages/Men";
import Women from "../../pages/Women";
import Beauty from "../../pages/Beauty";
import Sport from "../../pages/Sport";
import Product from "../../pages/Product";

function RoutesWebsite() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="beauty" element={<Beauty />} />
        <Route path="sport" element={<Sport />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </>
  );
}

export default RoutesWebsite;