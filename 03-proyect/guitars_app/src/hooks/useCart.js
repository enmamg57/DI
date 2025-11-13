import { useEffect, useState } from 'react';
const MAX_COUNT_GUITARS = 10;
const initialCart = JSON.parse(localStorage.getItem('cart') || []);
export const useCart = () => {
  const [cart, setCart] = useState(initialCart);
  useEffect(() => {
     save();
  },[cart]);
  const save = ()=>{
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const addToCart = (guitar) => {
    cart.some((item) => item.id === guitar.id) ?       
      setCart(
          cart.map((item) =>
            item.id === guitar.id && item.quantity < MAX_COUNT_GUITARS
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        ) 
      : 
      setCart([...cart, { ...guitar, quantity: 1 }]);
  };
//coste emplycart, dek itemcart, adquantitytocartitem
  const delItemCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  }

  const addQuantityToCartItem = (id, value) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity + value >= 1 && item.quantity + value <= MAX_COUNT_GUITARS
          ? { ...item, quantity: Math.max(1, item.quantity + value) }
          : item
      )
    );
    save();
  };

  const emplyCart = () => {
    setCart([]);
  }
  
  return {
    cart,
    emplyCart:emplyCart,
    delItemCart: delItemCart,
    addQuantityToCartItem: addQuantityToCartItem,
    addToCart: addToCart
  }
}