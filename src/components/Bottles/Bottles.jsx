import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import {
  addToLS,
  getStoredCart,
  removeFromLS,
} from "../../utilities/localStorage";
import Cart from "../../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  const handleCartBottle = (bottles) => {
    setCart([...cart, bottles]);
    addToLS(bottles.id);
  };

  const handleRemoveFromCart = (id) => {
    // visual card theke remove kora

    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    // remove from direct local storage
    removeFromLS(id);
  };

  useState(() => {
    fetch("/public/bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // load Cart from Local Storage
  useEffect(() => {
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      const savedCart = [];
      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      //
      console.log(savedCart);
      setCart(savedCart);
    }
  }, [bottles]);

  return (
    <div className="flex flex-row gap-5 justify-center">
      <div className="grid grid-cols-3 gap-2 ">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleCartBottle={handleCartBottle}
          ></Bottle>
        ))}
      </div>

      <div>
        <h1 className="text-2xl">List of Bought Bottle is: {cart.length}</h1>
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Bottles;
