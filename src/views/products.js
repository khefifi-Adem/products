import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/product";

function Products() {

    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        const getProducts = async () => {
            await axios.get("https://fakestoreapi.com/products").then(res => {

               setProducts(res.data);

            }).catch((e) => {
                console.log(e)
            })
        };
        getProducts();

    }, [])


    return (
        <div className="products">
            {
                products.map(
                    (product) => (
                        <Product key={product.id} category={product.category} description={product.description} image={product.image} price={product.price} rating={product.rating} title={product.title} />
                    )
                )
            }
        </div>
    );
}

export default Products;