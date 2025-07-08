import Plant from "./Plant";

function Plants({ plants, addToCart }) {
  return (
    <>
      <h2>Plants 🌱</h2>

      {plants.map((plant) => (
        <Plant key={plant.id} plant={plant} addToCart={addToCart} />
      ))}
    </>
  );
}

export default Plants;