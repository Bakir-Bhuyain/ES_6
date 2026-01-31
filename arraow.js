//single parameter
const numbers = (x, y) => x-y;
//multiple parameter arrow function
const multiply = (first, second, third) => first * second* third;


//single pera meter or one parameter in the basis of object

const getAge = (person) => person.age;
const student = {name: 'bakir', age: 25};
const age = getAge(student);
console.log(age);

//single parameter in the basis of array 
const getThird = numbers => numbers[2];
const third = getThird([1, 3, 65]);
console.log(third);

//no parameter 

const getPI = () => Math.PI;
console.log(getPI());

//large arrow function, if you want to get anything from the function then you have to use the return keyword

const doMath = (x, y, z) => {
      const sum = x + y + z;
      const mult = x * y * z;
      const result = sum + mult;
      return result;
}
const total = doMath(5, 8, 3);
console.log(total);