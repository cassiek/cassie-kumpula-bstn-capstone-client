// import scss
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { getItem } from "../../services/inventory-i-api.js";

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
    const productTypes = [""]

    return (
        <section>
            <h1>{id ? "Edit Inventory Item" : "Add New Inventory Item"}</h1>
            <h4>Item Details</h4>
            <form className="item-form" onSubmit={handleSubmit}>
                <div className="inputs">
                    <label htmlFor="itemName">ITEM NAME</label>
                    {/* <input name="itemName" value={inputs.name} onChange={handleChange}/> */}
                    <select name="itemName" onChange={handleChange}>
                        <option value={inputs.name}>{inputs.name}</option>
                    </select>
                    <label htmlFor="variant">VARIANT</label>
                    <input name="variant" value={inputs.variant} onChange={handleChange}/>
                    {/*<select name="variant">
                        <option value={values.variant}></option>
                    </select>*/}
                    <label htmlFor="warehouse">WAREHOUSE</label>
                    <input name="warehouse" value={inputs.warehouse_id} onChange={handleChange}/>
                    {/*<select name="warehouse">
                        <option value={values.warehouse_id}></option>
                    </select> */}
                    <label htmlFor="quantity">QTY</label>
                    <input name="quantity" type="number" value={inputs.quantity} onChange={handleChange}></input>
                </div>
                <div className="buttons">
                    <Link to={`/inventory/${id}`}>CANCEL</Link>
                    <button type="submit">ADD NEW INVENTORY ITEM</button>
                </div>
            </form>
        </section>
    )
};

export default AddEditInventoryItemForm;