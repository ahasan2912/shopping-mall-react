import { useState } from 'react'
import './App.css'
import AllProducts from './Components/AllProducts/AllProducts'
import CartContainer from './Components/CartContainer/CartContainer'
import Header from './Components/Header/Header'

function App() {

  const [isActive, setIsActive] = useState({
    cart: true,
    status: "active"
  });

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [price, setPrice] = useState(0);

  const handleIsActiveState = (status) => {
    if (status == 'cart') {
      setIsActive({
        cart: true,
        status: "cart"
      })
    }
    else {
      setIsActive({
        cart: false,
        status: "about "
      })
    }
  }

  const handleAddToCart = ((product) => {
    const isExist = selectedProducts.find(p => p.id === product.id);
    if(isExist){
      alert("Already exist");
    }
    else{
      const newProduct = [...selectedProducts, product];
      setSelectedProducts(newProduct);
      setPrice(price + product.price);
    }
  });

  const handleDeleteBtn = ((id, newPrice) => {
    const newProdeuct = selectedProducts.filter(product => product.id !== id);
    setSelectedProducts(newProdeuct);
    setPrice(price - newPrice)
  })
  return (
    <>
      <Header selectedProducts={selectedProducts} price={price}></Header>
      <div className='md:max-w-7xl mx-auto md:flex justify-around p-5'>
        <div className='md:w-2/3'>
          <AllProducts
            handleAddToCart={handleAddToCart}
          ></AllProducts>
        </div>
        <div className='md:w-1/3'>
          <CartContainer
            handleIsActiveState={handleIsActiveState}
            isActive={isActive}
            selectedProducts={selectedProducts}
            handleDeleteBtn={handleDeleteBtn}
          ></CartContainer>
        </div>
      </div>
    </>
  )
}

export default App
