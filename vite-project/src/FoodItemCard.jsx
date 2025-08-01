
import { useCart } from './CartContext';

export default function FoodItemCard({ id, name, price, image }) {
  const { cartItems, addItem, removeItem } = useCart();
  const quantity = cartItems[id] || 0;

  return (
    <div className="card p-3 rounded shadow" style={{ width: '250px' }}>
      <img src={image} alt={name} className="card-img-top" />
      <h5 className="mt-2">{name}</h5>
      <p>₹{price}</p>

      {quantity > 0 ? (
        <div className="d-flex justify-content-center align-items-center bg-light rounded-pill px-2 py-1 w-75 mx-auto">
          <button onClick={() => removeItem(id)} className="btn btn-link fw-bold">–</button>
          <span className="mx-2">{quantity}</span>
          <button onClick={() => addItem(id)} className="btn btn-link fw-bold">+</button>
        </div>
      ) : (
        <button className="btn btn-success w-100" onClick={() => addItem(id)}>Add</button>
      )}
    </div>
  );
}