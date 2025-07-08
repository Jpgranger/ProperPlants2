export default function Plant({ plant, addToCart }) {
  return (
    <div>
      {/* emoji + name */}
      <span role="img" aria-label={plant.name}>
        {plant.image}
      </span>{" "}
      <b>{plant.name}</b>{" "}
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </div>
  );
}