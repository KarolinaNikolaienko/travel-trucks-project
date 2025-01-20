const categories = {
  automatic: ["Automatic", "diagram-icon"],
  petrol: ["Petrol", "fuel-pump-icon"],
  AC: ["AC", "wind-icon"],
  bathroom: ["Bathroom", "shower-icon"],
  kitchen: ["Kitchen", "cup-hot-icon"],
  TV: ["TV", "tv-icon"],
  radio: ["Radio", "radio-icon"],
  refrigerator: ["Refrigerator", "fridge-icon"],
  microwave: ["Microwave", "microwave-icon"],
  gas: ["Gas", "gas-stove-icon"],
  water: ["Water", "water-icon"],
};

const generateCategories = (truck) => {
  let cats = [];
  if (truck.transmission == "automatic") cats.push(categories.automatic);
  if (truck.AC) cats.push(categories.AC);
  if (truck.kitchen) cats.push(categories.kitchen);
  if (truck.TV) cats.push(categories.TV);
  if (truck.radio) cats.push(categories.radio);
  if (truck.refrigerator) cats.push(categories.refrigerator);
  if (truck.microwave) cats.push(categories.microwave);
  if (truck.gas) cats.push(categories.gas);
  if (truck.water) cats.push(categories.water);
  if (truck.bathroom) cats.push(categories.bathroom);

  return cats;
};

export default generateCategories;
