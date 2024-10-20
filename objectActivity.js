let car = {
  type: "Lamborghini",
  model: "Aventador",
  color: "White"
};

console.log(typeof car); // Output: "object"

car.type = "Lamborghini";
console.log(car); // Output: { type: 'Lamborghini', model: 'Aventador', color: 'White' }
