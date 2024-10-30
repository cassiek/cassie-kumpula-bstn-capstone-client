import "./EditWarehouseForm.scss";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getWarehouse } from "../../services/warehouses-api.js";

function EditWarehouseForm() {
    const { id } = useParams();

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
        ///PUT to API
    }

    useEffect(() => {
        const fetchWarehouses = async () => {
            const response = await getWarehouse(id);
            setInputs(response.data);
        };
        fetchWarehouses();
    }, []);
    

    return (
        <section className="edit-form">
            <h1>{id ? "Edit Warehouse" : "Add New Warehouse"}</h1>
            <h4 className="edit-form__subheader">Warehouse Details</h4>
            <form className="edit-form__warehouse-details" onSubmit={handleSubmit}>
                <div className="edit-form__warehouse-details">
                    <label className="inputs__label" htmlFor="address">ADDRESS</label> <br></br>
                    <input className="inputs__input" name="address" value={inputs.address} onChange={handleChange}></input> <br></br>
                    <label className="inputs__label" htmlFor="city">CITY</label> <br></br>
                    <input className="inputs__input" name="city" value={inputs.city} onChange={handleChange}></input> <br></br>
                    <label className="inputs__label" htmlFor="country">COUNTRY</label> <br></br>
                    <input className="inputs__input" name="country" value={inputs.country} onChange={handleChange}></input>
                </div>
                <h4 className="edit-form__subheader">CONTACT</h4>
                <div className="edit-form__contact-details">
                    <label className="inputs__label" htmlFor="contactName">NAME</label> <br></br>
                    <input className="inputs__input" name="contactName" value={inputs.contact_name} onChange={handleChange}></input> <br></br>
                    <label className="inputs__label" htmlFor="position">POSITION</label> <br></br>
                    <input className="inputs__input" name="position" value={inputs.contact_position} onChange={handleChange}></input> <br></br>
                    <label className="inputs__label" htmlFor="phone">PHONE</label> <br></br>
                    <input className="inputs__input" name="phone" value={inputs.contact_phone} onChange={handleChange}></input> <br></br>
                    <label className="inputs__label" htmlFor="email">EMAIL</label> <br></br>
                    <input className="inputs__input" name="email" value={inputs.contact_email} onChange={handleChange}></input>
                </div>
                <div className="buttons">
                    <Link className="buttons__cancel" to={`/warehouses`}>CANCEL</Link>
                    <button className="buttons__submit" type="submit">{id ? "SAVE WAREHOUSE" : "ADD NEW WAREHOUSE"}</button>
                </div>
            </form>
        </section>
    )
};

export default EditWarehouseForm;