import "./InventoryListItem.scss";
// delete icon
// edit icon

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
            <img />
            <img />
        </div>
    )
};

export default InventoryListItem;