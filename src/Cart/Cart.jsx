import PropTypes from "prop-types"; // ES6
const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h1>Cart : {cart.length}</h1>
      <div>
        {cart.map((bottle) => (
          <div className="flex flex-row gap-2 ">
            {" "}
            <li key={bottle.id}> {bottle.name} </li>
            <button
              onClick={() => handleRemoveFromCart(bottle.id)}
              className="btn "
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func,
};

export default Cart;
