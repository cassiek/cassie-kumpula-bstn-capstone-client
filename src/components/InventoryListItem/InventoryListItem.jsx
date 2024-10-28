import "./InventoryListItem.scss";
import deleteIcon from "../../assets/icons/delete_15473236.png";
import editIcon from "../../assets/icons/pen_3979356.png";
import { Link } from "react-router-dom";

function InventoryListItem({ id, warehouseId, itemName, variant, stock, quantity }) {
    return (
        <div className="inventory">
            <div className="inventory__top">
                <h4>ID</h4>
                <p>{id}</p>
                <h4>WAREHOUSE</h4>
                <p>{warehouseId}</p>
            </div>
            <div className="inventory__bottom">
                <h4>NAME</h4>
                <p>{itemName}</p>
                <h4>VARIANT</h4>
                <p>{variant}</p>
                <h4>STATUS</h4>
                <p>{stock}</p>
                <h4>QTY</h4>
                <p>{quantity}</p>
            </div>
            <Link to="#"><img className="inventory__delete-icon" src={deleteIcon} /></Link>
            <Link to={`/inventory/${id}/edit`}><img className="inventory__edit-icon" src={editIcon} /></Link>
        </div>
    )
};

export default InventoryListItem;