import "./WarehouseListItem.scss";
import deleteIcon from "../../assets/icons/delete_15473236.png";
import editIcon from "../../assets/icons/pen_3979356.png";
import { Link } from "react-router-dom";
import DeleteModal from "../DeleteModal/DeleteModal.jsx";
import { useState } from "react";

function WarehouseListItem({ id, address, city, country, contactName, position, phone, email }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="warehouse">
            <div className="warehouse__warehouse">
                <h4 className="warehouse__header">WAREHOUSE</h4>
                <div className="warehouse__container--left">
                    <p className="warehouse__body">{id}</p>
                    <p className="warehouse__body">{address}</p> 
                    <p className="warehouse__body">{city}</p>
                    <p className="warehouse__body">{country}</p>
                </div>
            </div>
            <div className="warehouse__contact">
                <h4 className="warehouse__header">CONTACT</h4>
                <div className="warehouse__container--right">
                    <div className="warehouse__name-position">
                        <p className="warehouse__body">{contactName}</p>
                        <span className="warehouse__comma">,</span>
                        <p className="warehouse__body">{position}</p>
                    </div>
                    <p className="warehouse__body">{phone}</p>
                    <p className="warehouse__body">{email}</p>
                </div>
            </div>
            <div className="warehouse__buttons">
                <button className="warehouse__delete-button"><img className="warehouse__delete-icon" src={deleteIcon} onClick={() => setIsOpen(true)}/></button>
                <Link to={`/warehouses/${id}/edit`}><img className="warehouse__edit-icon" src={editIcon} /></Link>
            </div>
            <DeleteModal
            isOpen={isOpen}
            closeModal={handleCloseModal}
            id={id}
            type={"warehouse"}
            />
        </div>
    )
};

export default WarehouseListItem;