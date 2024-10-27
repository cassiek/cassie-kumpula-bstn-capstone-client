import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
//import components
//import pages
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"  />
          <Route path="/warehouses"  />
          <Route path="/warehouses/add" />
          <Route path="/warehouses/:id"  />
          <Route path="/warehouses/:id/edit" />
          <Route path="/warehouses/:id/inventory" />
          <Route path="/warehouses/:id/products" />

          <Route path="/products" />
          <Route path="/products/:id" />

          <Route path="/inventory" />
          <Route path="/inventory/:id" />
          <Route path="/invenotry/:id/edit" />
          <Route path="/inventory/add" />  {/* with an existing product type */}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
};

export default App;
