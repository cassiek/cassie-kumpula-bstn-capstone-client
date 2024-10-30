import "./ProductsListItem.scss";

function ProductsListItem({ productName, variants, category, description }) {
    return (
        <div className="product">
            <div className="product__left">
                <h4 className="product__header">NAME</h4>
                <p className="product__body">{productName}</p>
                <h4 className="product__header">VARIANTS</h4>
                <p className="product__body">{variants}</p>
            </div>
            <div className="product__right">
                <h4 className="product__header">CATEGORY</h4>
                <p className="product__body">{category}</p>
                <h4 className="product__header">DESCRIPTION</h4>
                <p className="product__body">{description}</p>
            </div>
        </div>
    )
};

export default ProductsListItem;