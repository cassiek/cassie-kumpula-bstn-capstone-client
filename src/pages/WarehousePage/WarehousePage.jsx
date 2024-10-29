import "./WarehousePage.scss";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import WarehouseList from "../../components/WarehouseList/WarehouseList.jsx";

function WarehousePage() {
    
    return (
        <main>
            <nav>
                <Link to="/warehouses/add">Add Warehouse</Link>
            </nav>
            <WarehouseList />
        </main>
    )
};

export default WarehousePage;

