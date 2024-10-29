import { useState, useEffect } from "react";
import { getAllProducts, getOneProductType } from "../../services/inventory-ii-api.js";
import ProductsListItem from "../../components/ProductsListItem/ProductsListItem.jsx";

function ProductsList() {
    const [productTypes, setProductTypes] = useState([]);

    const fetchProducts = async () => {
        const response = await getAllProducts();
        setProductTypes(response.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <main>
            {productTypes.map((product) => (
                <ProductsListItem
                id={product.id}
                productName={product.name}
                variants={product.variants}
                category={product.category}
                description={product.description}
                />
            ))}
        </main>
    )
};

export default ProductsList;