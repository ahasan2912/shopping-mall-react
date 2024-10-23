import PropTypes from 'prop-types';
const Header = ({selectedProducts, price}) => {
    return (
        <div className="bg-slate-200 py-5">
            <div className="md:max-w-7xl mx-auto flex items-center justify-between px-5">
                <h1 className="text-2xl font-bold">Logo</h1>
                <ul className="text-xl font-semibold flex items-center space-x-5">
                    <li>HOME</li>
                    <li>Product</li>
                    <li className="text-2xl font-bold">Cart: {selectedProducts.length}</li>
                    <li className="text-2xl font-bold">Total: ${price}</li>
                </ul>
            </div>
        </div>
    );
};

Header.propTypes = {
    selectedProducts: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired
}

export default Header;