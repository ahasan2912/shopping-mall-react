import PropTypes from 'prop-types';
import About from '../About/About';
import Cart from '../Cart/Cart';
const CartContainer = ({ handleIsActiveState, isActive, selectedProducts, handleDeleteBtn }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold">CartContainer Jsx</h1>
            <div className="flex justify-around">
                <div onClick={() => handleIsActiveState("cart")} className={`${isActive.cart ? "font-semibold mt-3 cursor-pointer bg-blue-600 px-5 py-2 rounded-md text-white" : "font-semibold mt-3 cursor-pointer"}`}>CART</div>
                <div onClick={() => handleIsActiveState('about')} className={`${isActive.cart ? "font-semibold mt-3 cursor-pointer" : "font-semibold mt-3 cursor-pointer bg-blue-600 px-5 py-2 rounded-md text-white"}`}>ABOUT</div>
            </div>
            <div>
                {
                    isActive.cart ? <Cart
                        selectedProducts={selectedProducts}
                        handleDeleteBtn={handleDeleteBtn}
                    ></Cart> : <About></About>
                }

            </div>
        </div>
    );
};

CartContainer.propTypes = {
    handleIsActiveState: PropTypes.func.isRequired,
    isActive: PropTypes.object.isRequired,
    selectedProducts: PropTypes.array.isRequired,
    handleDeleteBtn: PropTypes.func.isRequired
}
export default CartContainer;