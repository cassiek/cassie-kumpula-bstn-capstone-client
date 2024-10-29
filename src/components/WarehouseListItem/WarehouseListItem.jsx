import "./WarehouseListItem.scss";
import deleteIcon from "../../assets/icons/delete_15473236.png";
import editIcon from "../../assets/icons/pen_3979356.png";
import { Link } from "react-router-dom";
import DeleteModal from "../DeleteModal/DeleteModal.jsx";
import { useState } from "react";

function WarehouseListItem({ id, address, city, country, contactName, position, phone, email }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="warehouse">
            <div className="warehouse__top">
                <h4>WAREHOUSE</h4>
                <div className="top-details">
                    <p>{id}</p>
                    <p>{address}</p>
                    <p>{city}</p>
                    <p>{country}</p>
                </div>
            </div>
            <div className="warehouse__bottom">
                <h4>CONTACT</h4>
                <div className="bottom-details">
                    <div className="bottom-details__name-position">
                        <p className="bottom-details__item">{contactName}</p>
                        <span className="bottom-details__comma">,</span>
                        <p className="bottom-details__item">{position}</p>
                    </div>
                    <p>{phone}</p>
                    <p>{email}</p>
                </div>
            </div>
            <div className="warehouse__buttons">
                <button className="warehouse__delete-button"><img className="warehouse__delete-icon" src={deleteIcon} onClick={() => setIsOpen(true)}/></button>
                {isOpen && <DeleteModal setIsOpen={setIsOpen} />}
                <Link to={`/warehouses/${id}/edit`}><img className="warehouse__edit-icon" src={editIcon} /></Link>
            </div>
        </div>
    )
};

export default WarehouseListItem;