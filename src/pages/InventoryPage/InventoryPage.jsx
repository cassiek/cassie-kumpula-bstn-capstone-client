import "./InventoryPage.scss";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList.jsx";

function InventoryPage() {
    
    return (
        <main>
            <nav>
                <Link to="/inventory/add">Add Inventory</Link>
            </nav>
            <InventoryList />
        </main>
    )
};

export default InventoryPage;