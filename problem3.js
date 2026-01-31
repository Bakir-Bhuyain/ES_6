                        // write a arrow function where it will do the following :\\
/* 
1. square each array element 
2. calculate the sum of the squared elements
3. return the average of the sum of the squared elements.
*/


const doSquare = (numbers) => {
      let total = 0;
      for (const number of numbers){
            const totalOfSquare = number * number;
            total += totalOfSquare;
            // console.log(total);
            // console.log(average);
      }
      let average = total / numbers.length;
      return average;
}
const square = [12, 22, 23 ,24, 26, 42];
const totalValue = doSquare(square);
console.log(totalValue);