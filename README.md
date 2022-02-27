# _Pizza Parlor_

#### By _**Aaron Boyd**_

#### _This webpage will take a pizza order from a user and calculate the price of the pizza based on size and toppings._

## Technologies Used

* HTML
* CSS
* JavaScript
* Bootstrap
* JQuery

## Description

_I have created this webpage to show as an example of the JavaScript and JQuery skills I have learned, with an emphasis on objects and object prototypes._

[Link to my site hosted on gh_pages](https://aarondboyd.github.io/pizza-parlor/)

## Setup/Installation Requirements

* _Access your computer's terminal shell_
* _Go to your Desktop or preferred directory by using the command $ cd Desktop_
* _create a new directory by using the command $ mkdir Aarons-pizza-parlor_
* _Navigate to the directory by using the command $ cd Aarons-pizza-parlor_
* _Initialize git by using the command $ git init_
* _Clone the repository by using the command $ git clone https://github.com/AaronDBoyd/pizza-parlor
* _Access the HTML file by using the command $ code ._

## Known Bugs

* _No known bugs._

## Tests:

#### Describe: Pizza()

-Test: "It should return a Pizza object with two properties for topping and size."
-Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
  myPizza;
-Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

#### Describe: Pizza.prototype.price()

-Test: "It should calculate the price of the pizza based on the size and quantity of toppings."
-Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
  myPizza.price();
-Expected Output: 15;  
---
---

## License

_MIT_

Copyright (c) _2022_ _Aaron Boyd_