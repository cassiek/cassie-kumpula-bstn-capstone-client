//import "./AddIventoryItemPage.scss";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AddEditInventoryItemForm from "../../components/AddEditInventoryItemForm/AddEditInventoryItemForm";

function AddInventoryItemPage() {
    
    return (
        <main>
            <AddEditInventoryItemForm />
        </main>
    )
};

export default AddInventoryItemPage;