import "./EditWarehouseForm.scss";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getWarehouse, editWarehouse, addWarehouse } from "../../services/warehouses-api.js";

function EditWarehouseForm() {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        address: "",
        city: "",
        country: "",
        contact_name: "", 
        contact_position: "",
        contact_phone: "",
        contact_email: "",
    });


    useEffect(() => {
        const fetchWarehouses = async () => {
            const response = await getWarehouse(id);
            setFormData(response.data);
        };
        fetchWarehouses();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(formData);

        if (formData.id) {
            editWarehouse(formData.id, {
                "address": formData.address, 
                "city": formData.city, 
                "country": formData.country, 
                "contact_name": formData.contact_name,
                "contact_position": formData.contact_position,
                "contact_phone": formData.contact_phone, 
                "contact_email": formData.contact_email,  
            });
        } else {
            addWarehouse({ 
                "address": formData.address, 
                "city": formData.city, 
                "country": formData.country, 
                "contact_name": formData.contact_name,
                "contact_position": formData.contact_position, 
                "contact_phone": formData.contact_phone, 
                "contact_email": formData.contact_email, 
            });
        }
    };

    return (
        <section className="edit-form">
            <h1>{id ? "Edit Warehouse" : "Add New Warehouse"}</h1>
            <h4 className="edit-form__subheader">Warehouse Details</h4>
            <form className="edit-form__warehouse-details" onSubmit={handleSubmit}>
                <div className="edit-form__warehouse-details">
                    <label className="inputs__label" htmlFor="address">ADDRESS</label> <br></br>
                    <input className="inputs__input" name="address" id="address" value={formData.address} onChange={handleChange}></input> <br></br>
                    <label className="inputs__label" htmlFor="city">CITY</label> <br></br>
                    <input className="inputs__input" name="city" id="city" value={formData.city} onChange={handleChange}></input> <br></br>
                    <label className="inputs__label" htmlFor="country">COUNTRY</label> <br></br>
                    <input className="inputs__input" name="country" id="country" value={formData.country} onChange={handleChange}></input>
                </div>
                <div className="edit-form__contact-details">
                    <label className="inputs__label" htmlFor="contact_name">CONTACT NAME</label> <br></br>
                    <input className="inputs__input" name="contact_name" id="contact_name" value={formData.contact_name} onChange={handleChange}></input> <br></br>
                    <label className="inputs__label" htmlFor="contact_position">CONTACT POSITION</label> <br></br>
                    <input className="inputs__input" name="contact_position" id="contact_position" value={formData.contact_position} onChange={handleChange}></input> <br></br>
                    <label className="inputs__label" htmlFor="contact_phone">CONTACT PHONE</label> <br></br>
                    <input className="inputs__input" name="contact_phone" id="contact_phone" value={formData.contact_phone} onChange={handleChange}></input> <br></br>
                    <label className="inputs__label" htmlFor="contact_email">CONTACT EMAIL</label> <br></br>
                    <input className="inputs__input" name="contact_email" id="contact_email" value={formData.contact_email} onChange={handleChange}></input>
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