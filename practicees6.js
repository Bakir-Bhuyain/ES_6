const products = [
  {
    id: 101,
    name: "Laptop",
    category: "Electronics",
    price: 80000,
    inStock: true,
  },
  {
    id: 102,
    name: "T-Shirt",
    category: "Clothing",
    price: 500,
    inStock: false,
  },
  {
    id: 103,
    name: "Headphones",
    category: "Electronics",
    price: 3000,
    inStock: true,
  },
  {
    id: 104,
    name: "Backpack",
    category: "Accessories",
    price: 1200,
    inStock: true,
  },
  { id: 105, name: "Jeans", category: "Clothing", price: 2000, inStock: true },
];
// Task: Create a new array that contains only the names of all the products
const names = products.map((pName) => pName.name);
console.log(names);

// Task: Calculate the total price of all the products combined.

const prices = products.reduce((productPrice, priceOfProduct) => {
  const totalPrice = productPrice + priceOfProduct.price;
  return totalPrice;
}, 0);

console.log(prices);

// Task: Find and retrieve the single object where the id is 102
const idIs = products.find((product) => product.id === 102);
console.log(idIs);

// Task: Create a list (array) of all products that are currently in stock (inStock: true).
const lists = products.filter(list => list.inStock === true);
console.log(lists);

//Task: Print a message in the console for every product that says: "Product Name is [name] and price is [price]".
products.forEach(product => {
      console.log(`product name is ${product.name} and price is ${product.price}`);
      
});