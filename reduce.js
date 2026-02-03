// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const number = numbers.reduce((acc, cur) => acc + cur);
// console.log(number);

// const cart = [
//       {item : 'book', price : 120},
//       {item : 'pen', price : 140}
// ]
// const itemsOfCart = cart.reduce((total , product) => {
//       return total + product.price;
// },0)
// console.log(itemsOfCart);

const shoppingCart = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Pant", price: 800, quantity: 1 },
  { name: "Shoe", price: 1200, quantity: 1 },
];

const totalSpend = shoppingCart.reduce((previousTotal , total) =>{
      const totalPurchasedItem = total.price * total.quantity;
      return previousTotal + totalPurchasedItem;
},0);
console.log(totalSpend);