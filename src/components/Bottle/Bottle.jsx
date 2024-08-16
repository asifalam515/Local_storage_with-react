import React from "react";
import PropTypes, { object } from "prop-types"; // ES6
const Bottle = ({ bottle, handleCartBottle }) => {
  const { name, brand, volume_ml, price_usd, material, in_stock } = bottle;
  return (
    <div>
      <div className="card bg-primary text-primary-content ">
        <div className="card-body">
          <h2 className="card-title text-2xl"> {name} </h2>
          <p>Made of {material} </p>
          <div className="card-actions justify-end">
            <button className="btn" onClick={() => handleCartBottle(bottle)}>
              {" "}
              {in_stock ? "Buy Now" : "Pre Order"}{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleCartBottle: PropTypes.func,
};
export default Bottle;
