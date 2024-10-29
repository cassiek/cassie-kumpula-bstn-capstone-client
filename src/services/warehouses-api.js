import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Get all warehouses
export async function getWarehouses() {
    try {
        const url = `${BASE_URL}/warehouses`;
        const response = await axios.get(url);
        return response;
    } catch(err) {
        return err.response;
    }
}
  
// Get a single warehouses
export async function getWarehouse(id) {
    try {
        const url = `${BASE_URL}/warehouses/${id}`;
        const response = await axios.get(url);
        return response;
    } catch(err) {
        return err.response;
    }
}
  
// edit single warehouse  ==> NEEDS ROUTES
export async function editWarehouse(id, data) {
    try {
        const url = `${BASE_URL}/warehouses/${id}`;
        const response = await axios.put(url, data);    
        return response;
    } catch(err) {
        return err.response;
    }
}

// add warehouse ==> NEEDS ROUTES
export async function addWarehouse(newWarehouse) {
    try {
        const url = `${BASE_URL}/warehouses`;
        const response = await axios.post(url, newWarehouse);
        return response.data;
    } catch(err) {
        return err.response;
    }
}

// Delete a single warehouse
export async function deleteWarehouse(id) {
    try {
        const url = `${BASE_URL}/warehouses/${id}`;
        const response = await axios.delete(url);
        return response;
    } catch(err) {
        return err.response;
    }
}

// get inventory from one warehouse
export async function getWarehouseInventory(id) {
    try {
        const url = `${BASE_URL}/warehouses/${id}/inventory`;
        const response = await axios.get(url);
        return response.data;
    } catch(err) {
        return err.response;
    }
}

// get product types from one warehouse (?)

export default {
    getWarehouses,
    getWarehouse,
    editWarehouse,
    addWarehouse,
    deleteWarehouse,
    getWarehouseInventory,
};