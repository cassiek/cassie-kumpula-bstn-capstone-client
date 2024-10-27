import "./ProductsPage.scss";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ProductsList from "../../components/ProductsList/ProductsList.jsx";

function ProductsPage() {
    
    return (
        <main>
            <ProductsList />
        </main>
    )
};

export default ProductsPage;