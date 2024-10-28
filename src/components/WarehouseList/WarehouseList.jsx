import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { getWarehouses } from "../../services/warehouses-api.js";
import WarehouseListItem from "../../components/WarehouseListItem/WarehouseListItem.jsx";

function WarehouseList() {
    const [warehouses, setWarehouses] = useState([]);

    const fetchWarehouses = async () => {
        const response = await getWarehouses();
        setWarehouses(response.data);
    };

    useEffect(() => {
        fetchWarehouses();
    }, []);

    // Inventories() -> modal
    // Products() -> modal
    // useEffect for modals

    
    return (
        <main>
            {warehouses.map((item) => (
                <WarehouseListItem
                id={item.id}
                address={item.address}
                city={item.city}
                country={item.country}
                contactName={item.contact_name}
                position={item.contact_position}
                phone={item.contact_phone}
                email={item.contact_email}
                />
            ))}
        </main>
    )
};

export default WarehouseList;