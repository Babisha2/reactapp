import { useCart } from "./CartContext";

const MenuList = ({ items }) => {
  const { addToCart, removeFromCart, cartItems } = useCart();

  const getQuantity = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div>
      {items.map((item) => {
        const qty = getQuantity(item.id);
        return (
          <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
            <h3>{item.name} - ₹{item.price}</h3>
            <img src={item.image} alt={item.name} width="100" />
            <p>⭐ {item.rating}</p>

            {qty > 0 ? (
              <div>
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <span>{qty}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            ) : (
              <button onClick={() => addToCart(item)}>ADD</button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;