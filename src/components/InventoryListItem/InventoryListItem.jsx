import "./InventoryListItem.scss";
import deleteIcon from "../../assets/icons/delete_15473236.png";
import editIcon from "../../assets/icons/pen_3979356.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal.jsx";


function InventoryListItem({ id, warehouseId, itemName, variant, stock, quantity }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="inventory">
                <div className="inventory__left">
                    <h4 className="inventory__header">NAME</h4>
                    <p className="inventory__body">{itemName}</p>
                    <h4 className="inventory__header">VARIANT</h4>
                    <p className="inventory__body">{variant}</p>
                </div>
                <div className="inventory__middle">
                    <h4 className="inventory__header">ID</h4>
                    <p className="inventory__body">{id}</p>
                    <h4 className="inventory__header">WAREHOUSE</h4>
                    <p className="inventory__body">{warehouseId}</p>
                </div>
                <div className="inventory__right">
                    <h4 className="inventory__header">STATUS</h4>
                    <p className="inventory__body">{stock}</p>
                    <h4 className="inventory__header">QTY</h4>
                    <p className="inventory__body">{quantity}</p>
                </div>
            <div className="inventory__buttons">
                <button className="inventory__delete-button" onClick={() => setIsOpen(true)}><img className="inventory__delete-icon" src={deleteIcon} /></button>
                <Link to={`/inventory/${id}/edit`}><img className="inventory__edit-icon" src={editIcon} /></Link>
            </div>
                <DeleteModal
                    isOpen={isOpen}
                    closeModal={handleCloseModal}
                    id={id}
                    type={"inventory"}
                />
        </div>
    );
};

export default InventoryListItem;