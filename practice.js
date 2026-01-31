/*Problem state 01 : write a arrow function that will take 3 parameters, will multiply the parameters and will return the result */

const numbers = (num1, num2, num3) => num1 * num2 * num3;
console.log(numbers(2, 4, 6));

/* write the following sentence in three lines and print the result
1. i am a web developer 
2. i love to code 
3. i love to eat biriyani
*/

const job = " developer ";
const loveTo = "code";
const loveToEat = "biriyani";

console.log(`
      i am a web${job},
      i love to ${loveTo},
      i love to eat ${loveToEat}.
      `);

/* write a arrow function that will take 2 parameters : one parameter will come form you and another parameter will be a default parameter. add these two parameters and return the result */

const people = (name, age = 25) =>{
      const total = name + age;
      return total;
      
}
const details = people('Bakir')
console.log(details);

