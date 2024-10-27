import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Get all inventory items
export async function getInventory() {
    try {
        const url = `${BASE_URL}/inventory-i`;
        const response = await axios.get(url);
        return response;
    } catch(err) {
        return err.response;
    }
}

// Get single inventory item
export async function getItem(id) {
    try {
        const url = `${BASE_URL}/inventory-i/${id}`;
        const response = await axios.get(url);
        return response;
    } catch(err) {
        return err.response;
    }
}

// Update a single inventory item ==> NEEDS ROUTES

// Add a new inventory item ==> NEEDS ROUTES

// Delete an inventory item
export async function deleteItem(id) {
    try {
        const url = `${BASE_URL}/inventory-i/${id}`;
        const response = await axios.delete(url);
        return response;
    } catch(err) {
        return err.response;
    }
}

export default {
    getInventory,
    getItem,
    deleteItem
}