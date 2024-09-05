import "@fontsource/oswald/400.css";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/700.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  AboutUs,
  ContactUs,
  HomePage,
  ProductsAndServices,
  Projects,
} from "./pages";

import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products-services" element={<ProductsAndServices />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
