import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Brands from "./pages/Brands";
import Category from "./pages/Category";
import CreateProduct from "./pages/CreateProduct";
import ExpiredProducts from "./pages/ExpiredProducts";
import LowStocks from "./pages/LowStocks";
import VariantAttributes from "./pages/VariantAttributes";
import Product from "./pages/Product";
import SubCategory from "./pages/SubCategory";
import SuperAdmin from "./pages/SuperAdmin";
import LoginPage from "./pages/LoginPage";
import Units from "./pages/Units";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/category" element={<Category />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/expired-products" element={<ExpiredProducts />} />
        <Route path="/low-stocks" element={<LowStocks />} />
        <Route path="/variant-attributes" element={<VariantAttributes />} />
        <Route path="/products" element={<Product />} />
        <Route path="/sub-category" element={<SubCategory />} />
        <Route path="/super-admin" element={<SuperAdmin />} />
        <Route path="/unit" element={<Units />} />
      </Route>
    </Routes>
  );
}

export default App;
