import { useState } from "react";
import "./index.css";
import Plants from "./components/Plants";
import Cart from "./components/Cart";
import PLANTS from "./data";

function App() {
  const [cart, setCart] = useState([]);

  
  // Adds a plant to the cart.
  // If it's already in the cart, increase its quantity.
  // If not, add it with quantity = 1.
  
  const addToCart = (plant) => {
    const itemInCart = cart.find((item) => item.id === plant.id);

    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      const newItem = { ...plant, quantity: 1 };
      setCart([...cart, newItem]);
    }
  };

  
  // Removes a plant from the cart.
  // Decreases its quantity by 1.
  // If quantity hits 0, remove it entirely.
  
  const removeFromCart = (plantToRemove) => {
    setCart(
      cart
        .map((item) =>
          item.id === plantToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <Plants plants={PLANTS} addToCart={addToCart} />
      <Cart
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </>
  );
}

export default App;