Describe: Pizza()

Test: "It should return a Pizza object with two properties for topping and size."
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
  myPizza;
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }


Describe: Pizza.prototype.price()

Test: "It should calculate the price of the pizza based on the size and quantity of toppings."
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
  myPizza.price();
Expected Output: 15;  