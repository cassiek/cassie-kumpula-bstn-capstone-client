import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
//import components
//import pages
import WarehousePage from "./pages/WarehousePage/WarehousePage.jsx";
import InventoryPage from "./pages/InventoryPage/InventoryPage.jsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import AddInventoryItemPage from "./pages/AddInventoryItemPage/AddInventoryItemPage.jsx";
import EditInventoryItemPage from "./pages/EditInventoryItemPage/EditInventoryItemPage.jsx";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage.jsx";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"  element={<WarehousePage />} />
          <Route path="/warehouses" element={<WarehousePage />} />
          <Route path="/warehouses/add" element={<AddWarehousePage />}/>
          <Route path="/warehouses/:id"  />
          <Route path="/warehouses/:id/edit" element={<EditWarehousePage />} />
          <Route path="/warehouses/:id/inventory" />
          <Route path="/warehouses/:id/products" />

          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" />

          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/inventory/:id" />
          <Route path="/inventory/:id/edit" element={<EditInventoryItemPage />} />
          <Route path="/inventory/add" element={<AddInventoryItemPage />} />  {/* with an existing product type */}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
};

export default App;
