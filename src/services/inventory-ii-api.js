import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Get all of the product types in inventory-ii
export async function getAllProductTypes() {
    try {
        const url = `${BASE_URL}/inevntory-ii`;
        const response = await axios.get(url);
        return response;
    } catch(err) {
        return err.response;
    }
}

// Get a single product type in inventory-ii
export async function getProductType(id) {
    try {
        const url = `${BASE_URL}/inventory-ii/${id}`;
        const response = await axios.get(url);
        return response;
    } catch(err) {
        return err.response;
    }
}

export default {
    getAllProductTypes,
    getProductType
};