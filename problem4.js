// write an arrow function where it will do the following:\\
/* 
1. it will take two array inputs
2. combine the two arrays and assign them in a new array
3. find the maximum number from the new array and return the result.
*/

     const maxNumber = (arr1, arr2) => {
      const arr = [...arr1, ...arr2];
      const max = Math.max(... arr);
      return max;
     }
     const numberOneArray = [12, 24, 25, 32];
     const numberTwoArray = [25, 24 , 87];
     const highestNumber = maxNumber(numberOneArray, numberTwoArray);
     console.log(highestNumber);