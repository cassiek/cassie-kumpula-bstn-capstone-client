import "./ProductsListItem.scss";
//import del icon
//import edit icon

function ProductsListItem({ productName, variants, category, description }) {
    return (
        <div className="product">
            <div className="product__left">
                <h4>NAME</h4>
                <p>{productName}</p>
                <h4>VARIANTS</h4>
                <p>{variants}</p>
            </div>
            <div className="product__right">
                <h4>CATEGORY</h4>
                <p>{category}</p>
                <h4>DESCRIPTION</h4>
                <p>{description}</p>
            </div>
        </div>
    )
};

export default ProductsListItem;