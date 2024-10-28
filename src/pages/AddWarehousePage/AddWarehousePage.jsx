import "./AddWarehousePage.scss";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AddEditWarehouseForm from "../../components/AddEditWarehouseForm/AddEditWarehouseForm";

function AddWarehousePage() {
    
    return (
        <main>
            <AddEditWarehouseForm />
        </main>
    )
};

export default AddWarehousePage;