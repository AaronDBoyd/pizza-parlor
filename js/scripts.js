// Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}
const mePizza = new Pizza(["anchovies", "pineapple"], "medium");

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
      break;
    default:
      cost += 1;    
  }
  return cost;
};

// UI Logic
$(document).ready(function()  {
  // $(".userOutput").hide();
  $("#submitOrder").click(function(event) {
    let pizza = new Pizza($("input[name=topping]:checked"),$("#size option:selected").val());
    $("#result").text(pizza.price());
    $(".userOutput").show();
  });
});

// $(document).ready(function()  {
//   $("#submitOrder").click(function(event)  {
//     event.preventDefault();
//     let size = $("select#size option:selected").val();
//     let toppings = $("input:checkbox[name=topping]:checked").val();
    
//     const myPizza = new Pizza(toppings, size);
//     $("#sizeB").text(size);
//     $("#toppings").text(toppings);
    
//     $("#total").text(myPizza.price());
//     $(".userOutput").show();
    
//   });
// });

// issue with displaying the size of the pizza.
// issue with displaying the multiple toppings.