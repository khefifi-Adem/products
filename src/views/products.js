import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/product";

function Products() {




    const [loading,setLoading] = useState(false);
    const [products, setProducts] = useState([]);


    const [search, setSearch] = useState("");
    let inputHandler = (e) => {
        setSearch( e.target.value.toLowerCase());

    };
    const filteredData = products.filter((el) => {
        //if no input the return the original
        if (search === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            if (el.title.includes(search.toLowerCase())) {
                return el;
            }
        }
    })

    useEffect(() => {
        const getProducts = async () => {
            await axios.get("https://fakestoreapi.com/products").then(res => {

               setProducts(res.data);
               setLoading(true);

            }).catch((e) => {
                console.log(e)
            })
        };
        getProducts();

    }, [])


    return (
        <>
        <div className="search-container">
            <form className="search-form">
                <input
                    id='searchBar'
                    className="search-bar"
                    type="text"
                    onChange={inputHandler}
                    placeholder="SEARCH" />
                {/*<button className="search-button">SEARCH</button>*/}
            </form>
        </div>
        <div className="products">
            {
                !loading &&
                <h1>Loading</h1> ||
                filteredData.map(
                (product) => (
                <Product key={product.id} category={product.category} description={product.description} image={product.image} price={product.price} rating={product.rating} title={product.title} />
                )
                )
            }
        </div>
        </>
    );
}

export default Products;