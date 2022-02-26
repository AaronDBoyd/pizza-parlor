// Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}
const myPizza = new Pizza(["anchovies", "pineapple"], "medium");

Pizza.prototype.price = function ()  {
  let cost = 0;
  for (let i = 0; i < this.toppings.length; i++)  {
    cost += 2;
  }

  if (this.size === "small") {
    cost += 9;
  } else if (this.size === "medium") {
    cost += 11;
  } else if (this.size === "large") {
    cost += 13;
  }
  return cost;
}