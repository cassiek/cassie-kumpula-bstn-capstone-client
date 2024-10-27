import "./InventoryPage.scss";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList.jsx";

function InventoryPage() {
    
    return (
        <main>
            <InventoryList />
        </main>
    )
};

export default InventoryPage;