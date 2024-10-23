import PropTypes from 'prop-types';
const Cart = ({selectedProducts, handleDeleteBtn}) => {
    return (
        <div>
            {
                selectedProducts.map((product) =>(
                    <div key={product.id}>
                        <div className='mt-3 flex justify-center items-start space-x-2'>
                            <img className='ml-2 w-40 text-center rounded-lg' src={product.image} alt="" />
                            <p className='text-lg font-semibold'>{product.name}</p>
                            <button onClick={()=>handleDeleteBtn(product.id, product.price)} className='bg-gray-400 p-2 rounded-md font-bold'>Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

Cart.propTypes = {
    selectedProducts: PropTypes.array.isRequired,
    handleDeleteBtn: PropTypes.func.isRequired
}

export default Cart;