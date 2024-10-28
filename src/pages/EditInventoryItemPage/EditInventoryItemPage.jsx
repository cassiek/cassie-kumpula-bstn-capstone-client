import "./EditInventoryItemPage.scss";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AddEditInventoryItemForm from "../../components/AddEditInventoryItemForm/AddEditInventoryItemForm.jsx";

function EditInventoryItemPage() {
    
    return (
        <main>
            <AddEditInventoryItemForm />
        </main>
    )
};

export default EditInventoryItemPage;