let pizza= {
    crustType:["deep dish", "hand tossed"], 
    sauceType: ["traditional","marinara"],
    cheeses:["mozzarella", "feta", "provolone"],
    toppings:["mushrooms", "olives", "onions","pepperoni", "sausage", "salami", "peper"]
};

function pizzaOven (crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType; 
    pizza.sauceType = sauceType; 
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
let pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pizza1);

let pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

let pizza3 = pizzaOven("deep dish", "special sauce", "mozzarella", ["pepperoni", "sausage", "mushrooms", "olives"]);
console.log(pizza3);

let pizza4 = pizzaOven("hand tossed", "marinara", "provolone", ["salami", "olives", "peper", "onions"]);
console.log(pizza4);
