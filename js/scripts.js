// Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}
const myPizza = new Pizza(["anchovies", "pineapple"], "medium");

// Pizza.prototype.price = function ()  {
//   let cost = 0;
//   for (let i = 0; i < this.toppings.length; i++)  {
//     cost += 2;
//   }

//   if (this.size === "small") {
//     cost += 9;
//   } else if (this.size === "medium") {
//     cost += 11;
//   } else if (this.size === "large") {
//     cost += 13;
//   }
//   return cost;
// }

Pizza.prototype.price = function()  {
  const toppingsQuantity = this.toppings.length;
  let cost = toppingsQuantity * 2;

  switch (this.size) {
    case "small":
      cost += 9;
      break;
    case "medium":
      cost += 11;
      break;
    case "large":
      cost += 13;
      // break;
    // default:
    //   cost += 1;    
  }
  return cost;
};