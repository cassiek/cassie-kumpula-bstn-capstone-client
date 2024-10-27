import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
//import Footer from "./components/Footer/Footer.jsx";
//import components
//import pages
import WarehousePage from "./pages/WarehousePage/WarehousePage.jsx";
import InventoryPage from "./pages/InventoryPage/InventoryPage.jsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"  />
          <Route path="/warehouses" element={<WarehousePage />} />
          <Route path="/warehouses/add" />
          <Route path="/warehouses/:id"  />
          <Route path="/warehouses/:id/edit" />
          <Route path="/warehouses/:id/inventory" />
          <Route path="/warehouses/:id/products" />

          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" />

          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/inventory/:id" />
          <Route path="/invenotry/:id/edit" />
          <Route path="/inventory/add" />  {/* with an existing product type */}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        
      </BrowserRouter>
    </>
  )
};

export default App;
