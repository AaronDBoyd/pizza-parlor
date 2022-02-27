// Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

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
  $("#submitOrder").click(function(event) {
    let pizza = new Pizza($("input[name=topping]:checked"),$("#size option:selected").val());
    $("#result").text(pizza.price());
    $(".userOutput").show();
  });
});

