import "./WarehousePage.scss";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import WarehouseList from "../../components/WarehouseList/WarehouseList.jsx";

function WarehousePage() {
    
    return (
        <main>
            <WarehouseList />
        </main>
    )
};

export default WarehousePage;

