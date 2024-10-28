// import scss
//import del icon
//import edit icon

function ProductsListItem({ productName, variants, category, description }) {
    return (
        <div className="product">
            <div className="product__top">
                <h4>NAME</h4>
                <p>{productName}</p>
                <h4>VARIANTS</h4>
                <p>{variants}</p>
                <h4>CATEGORY</h4>
                <p>{category}</p>
                <h4>{description}</h4>
            </div>
            <div className="product__bottom">

            </div>
            <img />
            <img />
        </div>
    )
};

export default ProductsListItem;