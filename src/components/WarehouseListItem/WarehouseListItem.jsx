import "./WarehouseListItem.scss";
// delete icon
// edit icon

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
            <img />
            <img />
        </div>
    )
};

export default WarehouseListItem;