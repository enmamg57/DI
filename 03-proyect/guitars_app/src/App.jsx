import { useState } from 'react';
import { Guitar, Header, Footer } from './components/';
import { useCart } from './hooks/useCart';
import { db } from './data/db';

const MAX_COUNT_GUITARS = 10;

const initialData = JSON.parse(localStorage.getItem('cart')) || [];

const App = () => {
  const [guitars] = useState(db);
  const {cart, addToCart, delFromCart, updateQuantity, clearCart} = useCart();


  return (
    <>

      <Header cart={cart} 
        delFromCart={delFromCart} 
        updateQuantity={updateQuantity} 
        clearCart={clearCart} />


      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
        
        
        
          {guitars.map((guitar) => (
            <Guitar guitar={guitar} addToCart={addToCart} key={guitar.id} />
          ))
          }
        </div>
      </main>


      <Footer />
    </>
  );
};

export default App;



