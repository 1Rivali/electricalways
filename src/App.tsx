import "@fontsource/oswald/400.css";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/700.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  ContactUs,
  Credentials,
  HomePage,
  ProductsAndServices,
  ProductsList,
} from "./pages";

import { Navbar } from "./components";
import ProductDetails from "./pages/ProductDetails";
import LoginPage from "./pages/Login";
import AdminSlideshow from "./pages/admin/AdminSlideshow";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminContactUsList from "./pages/admin/AdminContactusList";
import AdminWhyChooseUs from "./pages/admin/AdminWhyChooseUs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/products" element={<ProductsAndServices />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/category/:id/products" element={<ProductsList />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin" element={<LoginPage />} />
        <Route path="/admin/slideshow" element={<AdminSlideshow />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/contactus" element={<AdminContactUsList />} />
        <Route path="/admin/whychooseus" element={<AdminWhyChooseUs />} />
      </Routes>
    </>
  );
}

export default App;
