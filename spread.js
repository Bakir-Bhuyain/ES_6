
/* first of all spread operator is basically used in the array and object 
* so basically the spread operator is work in array like when we do not use the spread operator(...) and only use console.log we find the whole array like: [ const numbers = [12, 25, 23, 14, 52 ,48];
                                          const number = Math.max(numbers);
                                          console.log(numbers)]
//expected output is like :               [ 12, 25, 23, 14, 52, 48 ]
* but when we use the spread operator then we find the only number without the array 
like this :::     const numbers = [12, 25, 23, 14, 52 ,48];
                  const number = Math.max(...numbers);
                  console.log(...numbers)
                  output : 12 25 23 14 52 48
 */
const numbers = [12, 25, 23, 14, 52 ,48];
const number = Math.max(...numbers);
console.log(...numbers)
console.log(number);



// use spread operator to copy 

const friends = [ 12, 22, 14, 25, 32 , 43];
const dosoto = friends;
//basically the thing is that when we normally push an element to an array then it will take place in the memory block and it take the reference of the previous storage 
// but in the spread operator it do not take the reference of the block so that it don't copy the newly push value
const bondhu = [...friends]; // ejaygay muloto jinista amra copy kortesi without taking the reference ;
console.log(bondhu);
dosoto.push(24);
console.log(dosoto);
console.log(friends);

//ektu advanced 

const sonkha = [...friends, 12];
console.log(sonkha);