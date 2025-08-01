import React, { useState } from "react";
import { useCart } from "../CartContext";
import burger1 from "../assets/pictures/burger1.jpg";
import burger2 from "../assets/pictures/burger2.jpg";
import burger3 from "../assets/pictures/burger3.jpg";
import Navbar from "../components/Navbar";
const menuItems = [
  {
    id: 1,
    name: "KFC",
    price: 100,
    image: burger1,
    rating: 4.4,
  },
  {
    id: 2,
    name: "Paneer Burger",
    price: 150,
    image: burger2,
    rating: 4.4,
  },
  {
    id: 3,
    name: "Cheese Burger",
    price: 200,
    image: burger3,
    rating: 4.4,
  },
];

function Rest1() {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});

  const increase = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const decrease = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0)
    }));
  };

  return (
    <div>
      <Navbar/>
    <div className="container mt-4">
      <h3 className="mb-3">Hotel Thazhakkudy Neelakandan</h3>
      <div className="row">
        {menuItems.map(item => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body text-center">
                <h5>{item.name}</h5>
                <p>Price: ₹{item.price}</p>
                <p>Rating: {item.rating}</p>

                <div className="d-flex justify-content-center align-items-center mb-2">
                  <button className="btn btn-outline-danger me-2" onClick={() => decrease(item.id)}>-</button>
                  <span>{quantities[item.id] || 0}</span>
                  <button className="btn btn-outline-success ms-2" onClick={() => increase(item.id)}>+</button>
                </div>

                <button
                  className="btn btn-info w-100"
                  onClick={() => addToCart(item, quantities[item.id] || 0)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Rest1;