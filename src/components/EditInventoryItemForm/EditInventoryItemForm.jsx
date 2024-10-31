import "./EditInventoryItemForm.scss";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getItem, updateItem, addItem } from "../../services/inventory-i-api.js";
import { getAllProducts, getOneProductType } from "../../services/inventory-ii-api.js";

function EditInventoryItemForm() {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        warehouse_id: "",
        name: "",
        variant: "",
        status: "",
        quantity: "",
    });
    
    useEffect(() => {
        const fetchInventoryItem = async () => {
            const response = await getItem(id);
            setFormData(response.data);
        };
        fetchInventoryItem();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.quantity > 0) {
            formData.status = true;
        } else {
            formData.status = false;
        }
        //console.log(formData);
        if (formData.id) {
            updateItem(formData.id, {
                "warehouse_id": Number(formData.warehouse_id), 
                "name": formData.name, 
                "variant": "pink sparkles", //formData.variant input not done yet
                "status": Number(formData.status),
                "quantity": Number(formData.quantity), 
            });
        } else {
            addItem({ 
                "warehouse_id": Number(formData.warehouse_id), 
                "name": formData.name, 
                "variant": "pink sparkles", //formData.variant input not done yet
                "status": Number(formData.status),
                "quantity": Number(formData.quantity), 
            });
        }
    };

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
        <section className="edit-form">
            <h1 className="">{id ? "Edit Inventory Item" : "Add New Inventory Item"}</h1>
            <h4 className="edit-form__subheader">Item Details</h4>
            <form className="item-form" onSubmit={handleSubmit}>
                <div className="inputs">
                    <label className="inputs__label" htmlFor="name">ITEM NAME</label> <br></br>
                    <select className="inputs__select" name="name" id="name" onChange={handleChange}>
                        <option value={formData.name}>{formData.name}</option>
                        {productTypes
                            .filter((item) => item !== formData.name)
                            .map((item) => {
                                return (
                                    <option value={formData.name}>{item}</option>
                                );
                        })
                    }
                    </select> <br></br>
                    <label className="inputs__label" htmlFor="variant">VARIANT</label> <br></br>
                    <select className="inputs__select" name="variant" id="variant" onChange={handleChange}>
                        <option value={formData.variant}>{formData.variant}</option>
            
            
            
                    </select> <br></br>
                    <label className="inputs__label" htmlFor="warehouse_id">WAREHOUSE</label> <br></br>
                    <select  className="inputs__select" name="warehouse_id" id="warehouse_id" onChange={handleChange}>
                        <option value={formData.warehouse_id} type="number">{formData.warehouse_id}</option>
                        {rangeTen
                            .filter((item) => item !== formData.warehouse_id)
                            .map((item) => {
                                return (
                                    <option value={formData.warehouse_id}>{item}</option>
                                );
                        })}
                    </select> <br></br>
                    <label className="inputs__label" htmlFor="quantity">QTY</label> <br></br>
                    <input name="quantity" type="number" min="0" id="quantity" value={formData.quantity} onChange={handleChange}></input>
                </div>
                <div className="buttons">
                    <Link className="buttons__cancel" to={`/inventory/`}>CANCEL</Link>
                    <button className="buttons__submit" type="submit">{id ? "SAVE INVENTORY ITEM" : "ADD NEW INVENTORY ITEM"}</button>
                </div>
            </form>
        </section>
    )
};

export default EditInventoryItemForm;