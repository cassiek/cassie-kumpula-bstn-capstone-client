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

// Update a single inventory item 
export async function updateItem(id, data) {
    try {
      const url = `${BASE_URL}/inventory-i/${id}`;
      await axios.put(url, data);
    } catch(err) {
      return err.response;
    }
}

// Add a new inventory item 
export async function addItem(newItem) {
    try {
      const url = `${BASE_URL}/inventory-i`;
      const response = await axios.post(url, newItem);
      return response;
    } catch(err) {
      return err.response;
    }
}

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