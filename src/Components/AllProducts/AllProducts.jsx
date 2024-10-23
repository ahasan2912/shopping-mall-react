import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Product from "../Product/Product";

const AllProducts = ({handleAddToCart}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div>
            <h1 className="text-2xl font-bold">All Products Jsx</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6">
                {
                    products.map((product, idx) => <Product
                        key={idx}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
        </div>
    );
};
AllProducts.propTypes = {
    handleAddToCart: PropTypes.func.isRequired
}
export default AllProducts;