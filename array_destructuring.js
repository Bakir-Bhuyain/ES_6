//basic object destructing 
const actor = {
      name : 'ananta',
      age : 30,
      phone : '0174258658',
}
//if we needed the property of the object then we wrote before like that :
//old style way 
// const name = actor.name;
// console.log(name);

// by using the destructuring \\
// first of all we need to use the {} after the variable declaration (const {property name}) then set the object name actual name (= actor)
// const {name} = actor;
// console.log(name);
//we can add  other properties into the variable that we declare like:
// const {name , age}= actor;

// console.log(name,age);

/* in the declared variable we can set a new property name like const {name , age: boyosh}  */

const {name, age:boyosh} =  actor;
/* here when we console the age then it gives a error because the age property is reassign with the boyosh */
// console.log(name, age);

/* here is the actual thimg that will work */
console.log(name , boyosh);



/***
 * array destructuring : 
*/

const numbers = [45, 99];
const [first, second]= numbers;
const [x, y] = [12, 66];




/* advanced use case like swap  */


//
function doubleThem (a, b){
      //01 . in here as i see that there is returning the value in array 
      return [a*2, b*2];
}
//02 . just because we  return the value in a array so that when we destructuring the thing here we have to destructure it with the array thats the concept :
const [prothom, ditiyo] =  doubleThem(6, 9);
console.log(prothom,ditiyo)

/* some of the advanced use case of array destructuring */


//1. first system:
const numbers = [1, 2, 3 ];
let num1 = numbers[0];
let num2 = numbers[1];
let num3 = numbers[2];
console.log(num1, num2, num3);



//second system :
const numbs = [1, 2, 3];
let [num1, num2, num3]= numbs

//third system:
let [num1, num2, num3] = [1, 2, 3];
console.log(num1);


//fourth system:
let num1 , num2 ,  num3;

[num1 , num2, num3] = [1, 2, 3];