// import scss
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { getWarehouses } from "../../services/warehouses-api.js";

function AddEditWarehouseForm() {
    const { id } = useParams();

    const [inputs, setInputs] = useState({
        address: "",
        city: "",
        country: "",
        contact_name: "", 
        contact_position: "",
        contact_phone: "",
        contact_email: ""
    })

    const handleChange = (event) => {

    }

    const handleSubmit = (event) => {
        ///POST to API
    }

    useEffect(() => {
        const fetchWarehouses = async () => {
            const response = await getWarehouses();
            setInputs(response.data);
        };
        fetchWarehouses();
    }, []);

    return (
        <main>
    
            <h4>Warehouse Details</h4>
            <form className="">
                <div className="">
                    <label htmlFor="address">ADDRESS</label>
                    <input name="address"></input>
                    <label htmlFor="city">CITY</label>
                    <input name="city"></input>
                    <label htmlFor="country">COUNTRY</label>
                    <input name="country"></input>
                </div>
                <h4>CONTACT</h4>
                <div className="">
                    <label htmlFor="first-name">FIRST NAME</label>
                    <input name="first-name"></input>
                    <label htmlFor="last-name">LAST NAME</label>
                    <input name="last-name"></input>
                    <label htmlFor="position">POSITION</label>
                    <input name="position"></input>
                    <label htmlFor="phone">PHONE</label>
                    <input name="phone"></input>
                    <label htmlFor="email">EMAIL</label>
                    <input name="email"></input>
                </div>
                <div className="buttons">
                    <Link to={-1}>CANCEL</Link>
                    <button type="submit">ADD NEW WAREHOUSE</button>
                </div>
            </form>
        </main>
    )
};

export default AddEditWarehouseForm;