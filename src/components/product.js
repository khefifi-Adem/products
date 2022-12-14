import {useState} from "react";

function Product({ category, description, image, price, rating, title }) {
    const [desc, setDesc] = useState(false);
    return (
        <div className="product">
            <div className="img-container">
                <img className="product-img" src={image} alt="product" />
            </div>
            <div className="details-container">
                <h5 className="product-category">
                    {category}
                </h5>
                <div className="product-main-details">
                    <h4 className="product-title">
                        {title}
                    </h4>
                    <p className="product-price">
                     |   {price}$
                    </p>
                </div>
                <p className="product-rating">
                    {rating.rate}-- {rating.count}
                </p>
                <div >
                    <button className="description-button" onClick={()=>{setDesc(!desc)}}>Description</button>
                </div>
                {
                    desc &&
                    <p className="product-description">
                    {description}
                    </p>
                }


            </div>
        </div>
    );
}

export default Product;