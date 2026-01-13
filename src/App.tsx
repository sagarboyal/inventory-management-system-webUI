import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";

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

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <Routes>
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
             <Route path="/unit" element={<SuperAdmin />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
