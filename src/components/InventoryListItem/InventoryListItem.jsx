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
                    <div>
                        <h4>NAME</h4>
                        <p>{itemName}</p>
                        <h4>VARIANT</h4>
                        <p>{variant}</p>
                        <h4>ID</h4>
                        <p>{id}</p>
                    </div>
                </div>
                <div className="inventory__right">
                    <h4>WAREHOUSE</h4>
                    <p>{warehouseId}</p>
                    <h4>STATUS</h4>
                    <p>{stock}</p>
                    <h4>QTY</h4>
                    <p>{quantity}</p>
                </div>
            <div className="inventory__buttons">
                <button className="inventory__delete-button" onClick={() => setIsOpen(true)}><img className="inventory__delete-icon" src={deleteIcon} /></button>
                <Link to={`/inventory/${id}/edit`}><img className="inventory__edit-icon" src={editIcon} /></Link>
            </div>
                <DeleteModal
                    isOpen={isOpen}
                    closeModal={handleCloseModal}
                    id={id}
                    name={itemName}
                    type={"inventory"}
                />
        </div>
    );
};

export default InventoryListItem;