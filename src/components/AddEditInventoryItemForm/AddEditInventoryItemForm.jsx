// import scss
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { getItem } from "../../services/inventory-i-api.js";
import { getAllProducts, getOneProductType } from "../../services/inventory-ii-api.js";

function AddEditInventoryItemForm() {
    const { id } = useParams();
    const [dataReceived, setDataReceived] = useState("");

    const [inputs, setInputs] = useState({
        warehouse_id: "",
        name: "",
        variant: "",
        status: "",
        quantity: ""
    }) 

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //post to API
    }

    useEffect(() => {
        const fetchInventoryItem = async () => {
            const response = await getItem(id);
            setInputs(response.data);
        };
        fetchInventoryItem();
    }, []);

    // need all item names and all warehouses
    // need the variants of each item
    // OR do not submit unless valid name, warehouse, variant
    const productTypes = ["Long Tie Belt Coat", "Crochet Knit Sweater", "Long Puffer Jacket",
        "Mock Turtleneck Dress", "Sweatshirt", "Straight Leg Pants", "High Waisted Jeans",
        "Wide Leg Pants", "Fine Knit Sweater", "Lightweight Cotton Shirt", "Chiffon Blouse", 
        "Oxford Shirt", "Feathersoft Blouse", "Long Sleeve Top", "Crew Kneck Long Top", 
        "High Waisted Soft Jeans", "Slacks", "Cable Knit Sweater", "Wide Leg Joggers", 
        "Loafers"];
    

    const productsList = getAllProducts();
    //console.log(productsList);
    // get all product types -> match current name to array -> get variants
    // if (inputs.name == products[i].name) { variantsArray = products[i].variants }

    function getVariants(item) {
        if (item.name == inputs.name) {
            let variants = [...inputs.variants];
            return variants;
        }
    }

    const rangeTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <section>
            <h1>{id ? "Edit Inventory Item" : "Add New Inventory Item"}</h1>
            <h4>Item Details</h4>
            <form className="item-form" onSubmit={handleSubmit}>
                <div className="inputs">
                    <label htmlFor="itemName">ITEM NAME</label>
                    <select name="itemName" onChange={handleChange}>
                        <option value={inputs.name}>{inputs.name}</option>
                        {productTypes
                            .filter((item) => item !== inputs.name)
                            .map((item) => {
                                return (
                                    <option value={inputs.name}>{item}</option>
                                );
                        })
                    }
                    </select>
                    <label htmlFor="variant">VARIANT</label>
                    <select name="variant" onChange={handleChange}>
                        <option value={inputs.variant}>{inputs.variant}</option>
            
            
            
                    </select>
                    <label htmlFor="warehouse">WAREHOUSE</label>
                    <select name="warehouse" onChange={handleChange}>
                        <option value={inputs.warehouse_id}>{inputs.warehouse_id}</option>
                        {rangeTen
                            .filter((item) => item !== inputs.warehouse_id)
                            .map((item) => {
                                return (
                                    <option value={inputs.warehouse_id}>{item}</option>
                                );
                        })}
                    </select>
                    <label htmlFor="quantity">QTY</label>
                    <input name="quantity" type="number" min="0" value={inputs.quantity} onChange={handleChange}></input>
                </div>
                <div className="buttons">
                    <Link to={`/inventory/`}>CANCEL</Link>
                    <button type="submit">ADD NEW INVENTORY ITEM</button>
                </div>
            </form>
        </section>
    )
};

export default AddEditInventoryItemForm;