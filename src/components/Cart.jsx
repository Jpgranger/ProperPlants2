function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <>
      <h2>Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>No plants in cart yet</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => removeFromCart(item)}
                style={{ color: "red" }}
              >
                -
              </button>{" "}
              <span>
                {item.image} {item.name}: {item.quantity}
              </span>{" "}
              <button
                onClick={() => addToCart(item)}
                style={{ color: "green" }}
              >
                +
              </button>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Cart;