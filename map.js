const numbers = [12, 22, 24, 4, 5];
// const doubled = [];
// for(const num of numbers){
//       const double = num *2;
//       doubled.push(double);

// }
// const doubleIt = x => x *2;
// const doubled = numbers.map(doubleIt)

// const doubled = numbers.map(x => x * 2);
// console.log(doubled);

// const products = ['phones', 'watch', 'laptop'];
// const items = products.map(product => `<li> ${product} </li>`);
// console.log(items);

// const fiveTimes = numbers.map(number => number*5);
// console.log(fiveTimes);

// const square = numbers.map(number => number * number);
// console.log(square);

const names = ['bakir', 'rakib', 'abir'];
const friendsName = names.map(name => name.length);
console.log(friendsName);

const friends = names .map(name1 => name1[0].toUpperCase());
console.log(friends);

const result = numbers.map((num, index) =>{
      return num * index;
})
console.log(result);