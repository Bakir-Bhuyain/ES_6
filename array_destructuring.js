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