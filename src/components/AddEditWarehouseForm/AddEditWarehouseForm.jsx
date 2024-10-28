// import scss
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { getWarehouse } from "../../services/warehouses-api.js";

function AddEditWarehouseForm() {
    const { id } = useParams();
    //const [dataReceived, setDataReceived] = useState("");

    const [inputs, setInputs] = useState({
        address: "",
        city: "",
        country: "",
        contact_name: "", 
        contact_position: "",
        contact_phone: "",
        contact_email: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        ///POST to API
    }

    useEffect(() => {
        const fetchWarehouses = async () => {
            const response = await getWarehouse(id);
            setInputs(response.data);
        };
        fetchWarehouses();
    }, []);
    

    return (
        <section>
            <h1>{id ? "Edit Warehouse" : "Add New Warehouse"}</h1>
            <h4>Warehouse Details</h4>
            <form className="" onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="address">ADDRESS</label>
                    <input name="address" value={inputs.address} onChange={handleChange}></input>
                    <label htmlFor="city">CITY</label>
                    <input name="city" value={inputs.city} onChange={handleChange}></input>
                    <label htmlFor="country">COUNTRY</label>
                    <input name="country" value={inputs.country} onChange={handleChange}></input>
                </div>
                <h4>CONTACT</h4>
                <div className="">
                    <label htmlFor="contactName">NAME</label>
                    <input name="contactName" value={inputs.contact_name} onChange={handleChange}></input>
                    <label htmlFor="position">POSITION</label>
                    <input name="position" value={inputs.contact_position} onChange={handleChange}></input>
                    <label htmlFor="phone">PHONE</label>
                    <input name="phone" value={inputs.contact_phone} onChange={handleChange}></input>
                    <label htmlFor="email">EMAIL</label>
                    <input name="email" value={inputs.contact_email} onChange={handleChange}></input>
                </div>
                <div className="buttons">
                    <Link to={`/warehouses`}>CANCEL</Link>
                    <button type="submit">ADD NEW WAREHOUSE</button>
                </div>
            </form>
        </section>
    )
};

export default AddEditWarehouseForm;