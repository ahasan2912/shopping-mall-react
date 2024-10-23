import PropTypes from 'prop-types';
const Product = ({ product, handleAddToCart}) => {
    const { name, image, description, price, isFeature } = product;
    // console.log(product);
    return (
        <div className='border-2 rounded-lg p-3'>
            <img className='w-full rounded-lg' src={image} alt="" />
            <h2 className='text-xl font-bold text-gray-600 mt-2'>{name}</h2>
            <p className='text-base text-gray-600'>{description}</p>
            <div>
                <p className='text-lg font-bold text-gray-600'>${price}</p>
                <p className='text-gray-600 font-semibold'>{isFeature?"Feature Category" : "Not Available"}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='bg-slate-400 px-2 py-2 rounded-md font-bold'>Add To Cart</button>
        </div>
    );
};
Product.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}
export default Product;