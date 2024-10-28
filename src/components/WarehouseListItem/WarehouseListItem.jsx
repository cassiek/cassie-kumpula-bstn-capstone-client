import "./WarehouseListItem.scss";
import deleteIcon from "../../assets/icons/delete_15473236.png";
import editIcon from "../../assets/icons/pen_3979356.png";
import { Link } from "react-router-dom";

function WarehouseListItem({ id, address, city, country, contactName, position, phone, email }) {
    return (
        <div className="warehouse">
            <div className="warehouse__top">
                <h4>WAREHOUSE</h4>
                <p>{id}</p>
                <p>{address}</p>
                <p>{city}</p>
                <p>{country}</p>
            </div>
            <div className="warehouse__bottom">
                <h4>CONTACT</h4>
                <p>{contactName}</p>
                <p>{position}</p>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
            <Link to="#"><img className="warehouse__delete-icon" src={deleteIcon} /></Link>
            <Link to={`/warehouses/${id}/edit`}><img className="warehouse__edit-icon" src={editIcon} /></Link>
        </div>
    )
};

export default WarehouseListItem;