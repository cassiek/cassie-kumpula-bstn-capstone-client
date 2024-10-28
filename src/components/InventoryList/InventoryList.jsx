import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { getInventory } from "../../services/inventory-i-api.js";
import InventoryListItem from "../../components/InventoryListItem/InventoryListItem.jsx";

function InventoryList() {
    const [inventory, setInventory] = useState([]);
    
    const fetchInventory = async () => {
        const response = await getInventory();
        setInventory(response.data);
    };
    
    useEffect(() => {
        fetchInventory();
    }, []);
    
    return (
        <main>
            {inventory.map((item) => (
                <InventoryListItem
                id={item.id}
                warehouseId={item.warehouse_id}
                itemName={item.name}
                variant={item.variant}
                stock={item.status}
                quantity={item.quantity}
                />
            ))} 
        </main>   
    )
};

export default InventoryList;